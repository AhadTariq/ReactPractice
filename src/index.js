const address = {
  street: "",
  city: "",
  country: "",
};

const street = address.street;
const city = address.city;
const country = address.country;

//now doing destructring object

const { street, city, country } = address;
//OR

const { street: st } = address;
