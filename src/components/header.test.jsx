import Header from "./header";

describe("<Header />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Should contain #site-header selector", () => {
    test("renders the component", () => {
      const wrapper = mount(<Header />);
      let len = wrapper.find("#site-header").length;
      expect(len).toEqual(1);
    });
  });

  describe("Should contain h1 tag", () => {
    test("renders the component", () => {
      const wrapper = mount(<Header />);
      let len = wrapper.find("h1").length;
      expect(len).toEqual(1);
    });
  });
});
