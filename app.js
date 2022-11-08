// simple api response

document.getElementById('getActivity').addEventListener('click', (e) => {
    getActivity()
});

document.getElementById('getActivity2').addEventListener('click', (e) => {
    getActivity2()
});


// This function will return undefined in the rendered html element, as the handleData function will not populate data in time. 
const getActivity = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity/').then(response => {
        const data = response.json();
        console.log(data)
        handleData(data)
    })
}

handleData = (data) => {
    document.querySelector('.activity').innerHTML = data.activity;
}


// performs instant fetch request = data function handles what is done with the data (putting it in html elements)
async function getActivity2() {
   await fetch('https://www.boredapi.com/api/activity/').then(res => res.json()).then(result => data(result));
}

function data(result) {
    console.log(result)
    document.querySelector('.activity2').innerHTML = result.activity;
}

