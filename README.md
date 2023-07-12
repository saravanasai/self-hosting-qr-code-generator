
# Self Hosting QR-code Generator

This is a simple project that can be self hosted for generating the QR-Code based on data you have been passed.


## Installation

To setup this project. clone this repository 

```bash
  cd project-root
```

```bash
  npm install 
```

```bash
  npm start run 
```
## Environment Variables

To run this project, you can rename the .env.example to .env & Configure PORT. 

`PORT = 3000 //default port`  



## API Reference

#### To generate QR-Code

```http
  GET http://localhost:3000/generate-qr-code
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `string` | **Required**. Your data to generate as QR-code |




## Sample Response

```
{ 
  code: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKpSURBVO3BQa7jSAwFwUxC97/yGy+5KkCQ/KdNMMJ8sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUMq
}
```


## Authors

- [@saravanasai](https://www.github.com/saravanasai)


## License

[MIT](https://choosealicense.com/licenses/mit/)

