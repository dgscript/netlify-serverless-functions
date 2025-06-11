# Netlify Serverless Functions

---

This is a guide on how to make serverless functions using Netlify!

## Steps

Make sure you have **npm** installed to run the commands!

1. In your project file, open de terminal and run:

```bash
npm install netlify-cli --global
```

This will install all the Netlify Serverless dependecies.

2. After you install netlify-cli run:

```bash
netlify login
```

This will open your browser so you can log into your netlify account!

3. After you successfully logged into your account run:

```bash
netlify init
```

This command will initialize the project so you can work with serverless functions!

4. After you set up your netlify project, create a new folder inside the project with the name **netlify** and inside this folder make a new folder with the name **functions**. This is where all your functions will be.

5. Inside the **netlify/functions** folder, create a new file with the name of your function.

Example: **hello-world.js**

Inside this function write:

```js
exports.handler = async function() {
    return {
        statusCode: 200,
        body: JSON.stringfy({
            message: "Hello World";
        })
    }
}
```

This will return `{ message: "Hello World"; }`

--
After you create your serverless function you can already use it to fetch data to your project!
**Example:**

In your javascript file on the frontend:

```js
async function fetchData() {
  /* make sure to always fetch using the /.netlify patch and not the normal one! */
  const response = await fetch(`/.netlify/functions/hello-world`);
  const data = await response.json();
  console.log(data); /* { message: "Hello World"; } */
}
```

--

## **IMPORTANT: Every function must have their separate file. You CAN'T use a single file for multiple functions!**

6. There you go! You have your serverless function where you can make API calls without exposing your API key!

**Example:**

```js
exports.handler = async function () {
  /* make sure to have dotenv dependecies installed! */
  const apiKey = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=SuperMan",
    options
  );
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
```

7. To test your project run:

```bash
netlify dev
```

This will open a new page on your browser with your project running locally to test!

To **reset** the local server run `Ctrl + C` to kill the terminal, then run the command again!
