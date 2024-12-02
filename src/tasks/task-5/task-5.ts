document.addEventListener("DOMContentLoaded", function () {
  type VirtualNode = {
    tag: string;
    attrs?: Record<string, string>;
    children?: (VirtualNode | string)[]; // Включает как строки, так и другие VirtualNode
  };

  // Функция для загрузки JSON-данных с сервера
  function loadJson() {
    fetch("/component.json") // Путь к вашему файлу component.json
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load component.json");
        }
        return response.json(); // Парсим JSON из ответа
      })
      .then((json: VirtualNode) => {
        renderVirtualDOM(json); // Рендерим виртуальный DOM
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }

  // Функция для создания элемента из виртуального узла
  function createElement(vNode: VirtualNode | string): Node {
    if (typeof vNode === "string") {
      return document.createTextNode(vNode); // Возвращаем текстовый узел
    }

    const element = document.createElement(vNode.tag); // Создаем элемент по тегу
    if (vNode.attrs) {
      for (const [key, value] of Object.entries(vNode.attrs)) {
        element.setAttribute(key, value); // Устанавливаем атрибуты
      }
    }
    if (vNode.children) {
      vNode.children.forEach((child) => {
        element.appendChild(createElement(child)); // Рекурсивно добавляем дочерние элементы
      });
    }
    return element;
  }

  // Функция для рендеринга виртуального DOM
  function renderVirtualDOM(json: VirtualNode): void {
    const app = document.getElementById("app");
    if (!app) {
      console.error("App container not found.");
      return;
    }

    app.innerHTML = ""; // Очищаем контейнер
    const element = createElement(json); // Создаем элемент
    app.appendChild(element); // Добавляем элемент в контейнер
  }

  // Загружаем и рендерим виртуальный DOM сразу после загрузки страницы
  loadJson();
});


// npx tsc