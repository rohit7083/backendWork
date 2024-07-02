this is backend practice
refferance :- 
1 gitignore source code = https://www.toptal.com/developers/gitignore
2 ( create new file name using terminal  coommand )
    cd src 
    ls
    touch newfilename , newfilename

3 (move directory 1 step previous )

    cd ..
4 (creating folder using terminal command )
    mkdire foldername1 , foldername2
    
5 there are  2 way to connect to datadbase 

    A. first method =
            (async () => {
                try {

                    await mongoose.connect(`${process.env.uri}`)
                    app.on("error", (error) => {
                        console.log("Error:", error);
                    })

                    app.listen(process.env.PORT, () => {
                        console.log(`app is listening on port ${process.env.PORT}`);

                    })

                }
                catch (error) {
                    console.log("ERROR: ", error);
                }
            })

    B. second method = we applied in our current project

6 // "test": "nodemon src/index.js" script in package .json original we chnaged to dev 