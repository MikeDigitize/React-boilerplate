let React = require("react/addons");

describe("BasketTotal", function() {
    it("Renders with the correct attributes and properties", function() {
        const TestUtils = React.addons.TestUtils;
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement("p", { className: "texticles" }, "That sweet, sweet React DOM"));
        const component = shallowRenderer.getRenderOutput();
        expect(component.props.className).toEqual("texticles");
    });
});