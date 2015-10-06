jest.dontMock("../BasketTotal.jsx");
let React = require("react/addons");
let BasketTotal = require("../BasketTotal.jsx");

describe("BasketTotal", function() {
    it("Renders with the correct attributes and properties", function() {
        const TestUtils = React.addons.TestUtils;
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render((<BasketTotal />));
        const component = shallowRenderer.getRenderOutput();
        expect(component.props.className).toEqual("col-sm-4 col-sm-offset-4");
    });
});