import React from "react";

const genshinCharacter = [
  {
    id: 1,
    name: "Lisa",
    image:
      "https://w.namu.la/s/dc7347a6e5ea00bbdf8a1597fa2ff4235da2676d41a89d26f77cd9cd04050d8aa255be51703e03b83a4ad64cc644717b6b7433a64c67818e914516d9b0576bf3d6e6b5997ec8cb2de812fadca592a17ef43082435c7f6e2f178e78e675e226fd26415d63f741cf98f6bdd246c18d6513",
  },
  {
    id: 2,
    name: "Sara",
    image:
      "https://w.namu.la/s/cde60cbfe6029e9fdb2b1cd5bcce032bcc745dcc3c307ce3b066977286f395bb320f40cc3f2d0aa5dc2852b545cee3fcf5caf8ee770f373a7bfda568f5ebe705238a82690a8e0a94962879b3e0078084bb26ad310b969d5ff48b180ce4478b3e3651f8292e8b9248bfcee33893ddce45",
  },
  {
    id: 3,
    name: "Shenhe",
    image:
      "https://w.namu.la/s/0440c49e233d550e79d473633fc4c7bd017e0347bf933f85460cb334d0139fc46eaa203318fd802611cdacfcdd2051df2786a4705796c1f0b625b4e6d18115da7271933d7f3680d9f70741e2299463d0685bfa79f53716eea30bf9cb3dd8c1fee692e5aa70c607f3b7ec95ca732ab22b",
  },
  {
    id: 4,
    name: "Rosaria",
    image:
      "https://w.namu.la/s/308b159df1ba2ae0e412c9be33a103c234b0fa360ecdf0b10a470ddb7dae8801cd18b0f48973025d7fb486114b97eb58214c5f0c9a6f09d02cc2b49a68ee36f25ea7bc491a162954f43ad1e366a549530db654746ce7258b7466402d998263f0438283462c408ac037b04c79556af45d",
  },
  {
    id: 5,
    name: "Miko",
    image:
      "https://w.namu.la/s/18a19868efdceac44faf51976a0a7efad80dc5d0e073f85326b77a71d74757a7b5186e766ec190a4c21f0d67e2abcad0f16859a98a65c9991599a4eba433dc3aecb9eed9c93fea17279f1cfa212b20c2b4255ad681beef14aed2f3edd4e93389a9afef1b8a0df39a03fa8437ef6a38ed",
  },
];

function Character({ name, picture }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {genshinCharacter.map((cha) => (
        <Character key={cha.id} name={cha.name} picture={cha.image} />
      ))}
    </div>
  );
}

export default App;
