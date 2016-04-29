# jomc583-final
This is a interactive data dashboard about North Carolina water. Data was taken from the UNC Environmental Financial Center and the USGS. This project was made with node, angular.js, and d3.

To install:

Clone this repository into your vagrant sites folder

```
git clone https://github.com/ashlenrenner/jomc583-final.git
```

Install dependencies on your computer (NOT THE VAGRANT MACHINE)

```
cd /path/to/sites/jomc583-final
npm install
```

Log into your vagrant machine

```
vagrant ssh
```

Move to the shared folder and start the server

```
cd /vagrant/jomc583-final
node index.js
```

Navigate to http://localhost:8080/dashboard/
