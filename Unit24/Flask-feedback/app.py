from flask import Flask, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User, Feedback
from forms import UserForm, LoginForm, FeedbackForm
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///feedback_db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


connect_db(app)

toolbar = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register_user():
    form = UserForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form. first_name.data
        last_name = form.last_name.data
        new_user = User.register(username, password, email, first_name, last_name)

        db.session.add(new_user)
        try:
            db.session.commit()
        except IntegrityError:
            form.username.errors.append('Username taken.  Please pick another')
            return render_template('register.html', form=form)
        # session['user_id'] = new_user.id
        session['username'] = new_user.username
        flash('Welcome! Successfully Created Your Account!', "success")
        return redirect('/secret')

    return render_template('register.html', form=form)

@app.route('/secret', methods=['GET', 'POST'])
def show_secrets():
    if "user_id" not in session:
        flash("Please login first!", "danger")
        return redirect('/')

    return render_template('secret.html')

@app.route('/login', methods=['GET', 'POST'])
def login_user():
    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password)
        if user:
            flash(f"Welcome Back, {user.username}!", "primary")
            session['username'] = user.username
            return redirect(f"/users/{session['username']}")
        else:
            form.username.errors = ['Invalid username/password.']

    return render_template('login.html', form=form)

@app.route('/logout')
def logout_user():
    session.pop('username')
    flash("Goodbye!", "info")
    return redirect('/')

@app.route('/users/<username>' )
def show_profile(username):
    if "username" not in session or username != session['username']:
        flash("Wrong Login", "danger")
        return redirect('/')
    user = User.query.filter_by(username = username).first()
    feedback = user.feedback
    return render_template('profile.html', user=user, feedback=feedback)

@app.route("/users/<username>/delete")
def remove_user(username):
    """Remove user nad redirect to login."""

    if "username" not in session or username != session['username']:
        flash("Wrong Login", "danger")
        return redirect('/')

    user = User.query.filter_by(username = username).first()
    db.session.delete(user)
    db.session.commit()
    session.pop("username")
    return redirect("/login")







@app.route("/users/<username>/feedback/add", methods=["GET", "POST"])
def new_feedback(username):
    """Show add-feedback form and process it."""

    if "username" not in session or username != session['username']:
        flash("Login First", "danger")
        return redirect('/')

    form = FeedbackForm()

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        feedback = Feedback(
            title=title,
            content=content,
            username=username,
        )

        db.session.add(feedback)
        db.session.commit()

        return redirect(f"/users/{feedback.username}")

    else:
        return render_template("add-feedback.html", form=form)


@app.route("/feedback/<int:feedback_id>/update", methods=["GET", "POST"])
def update_feedback(feedback_id):
    """Show update-feedback form and process it."""

    feedback = Feedback.query.get(feedback_id)

    if "username" not in session or feedback.username != session['username']:
        flash("Login First", "danger")
        return redirect('/')

    form = FeedbackForm(obj=feedback)

    if form.validate_on_submit():
        feedback.title = form.title.data
        feedback.content = form.content.data

        db.session.commit()

        return redirect(f"/users/{feedback.username}")

    return render_template("edit.html", form=form, feedback=feedback)


@app.route("/feedback/<int:feedback_id>/delete")
def delete_feedback(feedback_id):
    """Delete feedback."""

    feedback = Feedback.query.get(feedback_id)
    if "username" not in session or feedback.username != session['username']:
        flash("Login First", "danger")
        return redirect('/')

    db.session.delete(feedback)
    db.session.commit()

    return redirect(f"/users/{feedback.username}")