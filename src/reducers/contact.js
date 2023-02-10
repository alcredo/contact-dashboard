const initialContact = {
  name: "Budi",
  idCardNumber: "E12345ABCDED",
  address: "Jln Budi Sudarsono \nKediri \nJawa Timur \nIndonesia",
  job: "Football Player",
  birthDate: "2022-06-02",
  phoneNumber: ["082212229034", "06890001222"],
  relatives: [
    { name: "Andhika", birthDate: "2022-03-19", relation: "brother"},
    { name: "Putri", birthDate: "2021-11-22", relation: "sister"}
  ]
};


export default function contact(state = [initialContact], action) {
    switch (action.type) {
      case 'ADD_CONTACT':
        return state.concat([action.payload])
      default:
        return state
    }
}