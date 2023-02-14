console.log(this);

function hello() {
  this.i = 0;

  console.log(this);
}

const helloArrow = () => {
  console.log(this);
};

hello();
helloArrow();