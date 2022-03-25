import React from "react";
import axios from "axios";
import Joke from "./Joke1";
import "./JokeList.css";

class JokeList extends React.Component {
    static defaultProps = {
        numJokesToGet: 10
    };

    constructor(props) {
        super(props);
        this.state = { jokes: [] };
        this.generateNewJokes = this.generateNewJokes.bind(this);
        this.vote = this.vote.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length < this.props.numJokesToGet) this.getJokes();
    }

    componentDidUpdate() {
        if (this.state.jokes.length < this.props.numJokesToGet) this.getJokes();
    }

    async getJokes() {
        try {
            let j = this.state.jokes;
            let seenJokes = new Set();
            while (j.length < this.props.numJokesToGet) {
                let res = await axios.get("https://icanhazdadjoke.com", {
                    headers: { Accept: "application/json" }
                });
                let { status, ...jokeObj } = res.data;
                if (!seenJokes.has(jokeObj.id)) {
                    seenJokes.add(jokeObj.id);
                    j.push({ ...jokeObj, votes: 0 });
                } else {
                    console.error("duplicate found!");
                }
            }
            console.log(j)
            this.setState({ j });
        } catch (e) {
            console.log(e);
        }
    }
    generateNewJokes() {
        this.setState({ jokes: [] });
    }

    #why
    vote(id, delta) {
        this.setState(allJokes =>
            ({jokes: allJokes.jokes.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j))
         }));
    }

    render() {
        let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
        console.log(sortedJokes)
        return (
            <div className="JokeList">
                <button className="JokeList-getmore" onClick={this.generateNewJokes}>
                    Get New Jokes
                </button>

                {sortedJokes.map(j => (
                    <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={this.vote} />
                ))}

                {sortedJokes.length < this.props.numJokesToGet ? (
                    <div className="loading">
                        <i className="fas fa-4x fa-spinner fa-spin" />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default JokeList;