let React = require("react/addons");

describe("Header", function() {
    it("Renders with the correct attributes and properties", function() {
        const TestUtils = React.addons.TestUtils;
        let element = TestUtils.renderIntoDocument(React.createElement("p", { className: "jest-p" }, "Just another P tag"));
        expect(element.getDOMNode().textContent).toBe("Just another P tag");
    });
});