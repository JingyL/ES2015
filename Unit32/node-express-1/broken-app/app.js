const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require("./expressError")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/', function (req, res, next) {
    try {
        let results = []
        let urls = []
        req.body.developers.map(d => {
            urls.push(`https://api.github.com/users/${d}`)
        })
        //   let r = urls.map(url => axios.get(url))
        //   r.map(u => u.then(function(d) {
        //     if (d) {
        //         console.log(d.data)
        //         console.log(d.data.name)
        //         results.push({name:d.data.name, bio:d.data.bio })
        //     }
        //   }))
        //   console.log(r)
        let Upromises = []
        for (let i = 1; i < urls.length; i++) {
            Upromises.push(
                axios.get(`${urls[i]}`)
            );
        }
        Promise.all(Upromises)
            .then(u => (
                u.forEach(r => {
                    if (r) {
                        console.log(r.data.name)
                        results.push(r.data.name)
                    }
                })
            ))
            .catch(err => console.log(err));
        console.log(results)

        return res.send(JSON.stringify(results));
        debugger
    } catch {
        next(err);
    }
});


app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});

app.listen(3000, function () {
    console.log("Server starting on port 3000")
})




// Origin Code
//   app.post('/', function(req, res, next) {
//     try {
//       let results = req.body.developers.map(async d => {
//         return await axios.get(`https://api.github.com/users/${d}`);
//       });
//       console.log(results)
//       let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//       return res.send(JSON.stringify(out));
//     } catch {
//       next(err);
//     }
//   });
