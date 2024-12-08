document.addEventListener("DOMContentLoaded", function () {
  type VirtualNode = {
    tag: string;
    attrs?: Record<string, string>;
    children?: (VirtualNode | string)[];
  };

  function loadJson() {
    fetch("/component.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load component.json");
        }
        return response.json();
      })
      .then((json: VirtualNode) => {
        renderVirtualDOM(json);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }

  function createElement(vNode: VirtualNode | string): Node {
    if (typeof vNode === "string") {
      return document.createTextNode(vNode);
    }

    const element = document.createElement(vNode.tag);
    if (vNode.attrs) {
      for (const [key, value] of Object.entries(vNode.attrs)) {
        element.setAttribute(key, value);
      }
    }
    if (vNode.children) {
      vNode.children.forEach((child) => {
        element.appendChild(createElement(child));
      });
    }
    return element;
  }

  function renderVirtualDOM(json: VirtualNode): void {
    const app = document.getElementById("app");
    if (!app) {
      console.error("App container not found.");
      return;
    }

    app.innerHTML = "";
    const element = createElement(json);
    app.appendChild(element);
  }

  loadJson();
});


// npx tsc
