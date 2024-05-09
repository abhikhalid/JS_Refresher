// Running Promises in Parallel.

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
}

const get3Countries = async function(c1,c2,c3){
    try{
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

        // console.log([data1.capital[0],data2.capital[0],data3.capital[0]]);

        //but problem is, why should the second ajax call should wait for first one? and the third ajax call wait for the second one?
        //since, every ajax call is independent here.
        //instead of running these promises in sequence, we can actually run them in parallel.

        // Promise.all() receives an array and it also returns an array.
        // If one of the promises reject in Promise.all() then the whole promise.all() actually rejects as well.
        // So, promise.all() short circuits when one promise rejects.

       const data = await Promise.all([await getJSON(`https://restcountries.com/v3.1/name/${c1}`),
                await getJSON(`https://restcountries.com/v3.1/name/${c2}`),
                await getJSON(`https://restcountries.com/v3.1/name/${c3}`)]
            );

    //    console.log(data);
       console.log(data.map(d => d[0].capital[0]));

    }
    catch(err){
        console.error(err);
    }
}

// console.log(get3Countries('bangladesh','india','pakistan')); // Promise
get3Countries('bangladesh','indonesia','pakistan')




