# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__) 

@app.route('/add')
def do_add():
    """Add a and b parameters."""

    a = int(request.args["a"])
    b = int(request.args["b"])
    result = add(a, b)

    return f"{result}"

@app.route('/sub')
def do_sub():
    """sub a and b parameters."""

    a = int(request.args["a"])
    b = int(request.args["b"])
    result = sub(a, b)

    return f"{result}"

@app.route('/mult')
def do_mult():
    """mult a and b parameters."""

    a = int(request.args["a"])
    b = int(request.args["b"])
    result = mult(a, b)

    return f"{result}"

@app.route('/div')
def do_div():
    """div a and b parameters."""

    a = int(request.args["a"])
    b = int(request.args["b"])
    result = div(a, b)

    return f"{result}"



OP = {
    "add" : add, 
    "sub" : sub, 
    "mult" : mult, 
    "div" : div
    }

@app.route('/math/<operator>')
def do_math(operator):
    """cal a and b parameters."""

    a = int(request.args["a"])
    b = int(request.args["b"])
    result = OP[operator](a, b)

    return f"{result}"    

#  str(result)
# OP = [add, sub, mult, div]

# @app.route('/math/<operator>')
# def do_math(operator):
#     """cal a and b parameters."""

#     a = int(request.args["a"])
#     b = int(request.args["b"])
#     if operator in OP:
#         result = operator(a, b)
#     else:
#         result = None

#     return f"{result}"