let iterable = 1;

        function edit(param) {
            document.getElementById("box" + String(param)).style.width = "300px";
            document.getElementById("remove" + String(param)).style.display = "none";
            document.getElementById("edit" + String(param)).style.display = "none";
            document.getElementById("done" + String(param)).style.display = "flex";
            document.getElementById("textTitle" + String(param)).innerHTML = "Title: ";
            document.getElementById("textTodo" + String(param)).innerHTML = "To do: ";
            document.getElementById("textDo" + String(param)).innerHTML = "When to do: ";
            document.getElementById("textDue" + String(param)).innerHTML = "When it's due: ";
            document.getElementById("inputTitle" + String(param)).style.display = "block";
            document.getElementById("inputTodo" + String(param)).style.display = "block";
            document.getElementById("inputDo" + String(param)).style.display = "block";
            document.getElementById("inputDue" + String(param)).style.display = "block";
            document.getElementById("spaceTodo" + String(param)).style.lineHeight = "0px;";
            document.getElementById("spaceTodo" + String(param)).style.height = "0px";
            document.getElementById("spaceTodo" + String(param)).style.fontSize = "0px";
        }

        function save(param) {
            document.getElementById("box" + String(param)).style.width = "500px";
            document.getElementById("remove" + String(param)).style.display = "flex";
            document.getElementById("edit" + String(param)).style.display = "flex";
            document.getElementById("done" + String(param)).style.display = "none";
            document.getElementById("textTitle" + String(param)).innerHTML = "Title: " + document.getElementById("inputTitle" + String(param)).value;
            document.getElementById("textTodo" + String(param)).innerHTML = "To do: " + document.getElementById("inputTodo" + String(param)).value;
            document.getElementById("textDo" + String(param)).innerHTML = "When to do: " + document.getElementById("inputDo" + String(param)).value;
            document.getElementById("textDue" + String(param)).innerHTML = "When it's due: " + document.getElementById("inputDue" + String(param)).value;
            document.getElementById("inputTitle" + String(param)).style.display = "none";
            document.getElementById("inputTodo" + String(param)).style.display = "none";
            document.getElementById("inputDo" + String(param)).style.display = "none";
            document.getElementById("inputDue" + String(param)).style.display = "none";
            if (document.getElementById("textTodo" + String(param)).innerHTML.length < 25) {
                document.getElementById("spaceTodo" + String(param)).style.lineHeight = "0px;";
                document.getElementById("spaceTodo" + String(param)).style.height = "0px";
                document.getElementById("spaceTodo" + String(param)).style.fontSize = "0px";
            }
            else {
                document.getElementById("spaceTodo" + String(param)).style.lineHeight = document.getElementById("textTodo" + String(param)).innerHTML.length / 3.75 + "px";
                document.getElementById("spaceTodo" + String(param)).style.height = document.getElementById("textTodo" + String(param)).innerHTML.length / 3.75 + "px";
                document.getElementById("spaceTodo" + String(param)).style.fontSize = document.getElementById("textTodo" + String(param)).innerHTML.length / 3.75 + "px";
            }
        }

        function remove(param) {
            document.getElementById("boxSpace" + String(param)).style.display = "none";
            document.getElementById("box" + String(param)).style.display = "none";
            document.getElementById("textTitle" + String(param)).innerHTML = "Title: ";
            document.getElementById("textTodo" + String(param)).innerHTML = "To do: ";
            document.getElementById("textDo" + String(param)).innerHTML = "When to do: ";
            document.getElementById("textDue" + String(param)).innerHTML = "When it's due: "
            document.getElementById("inputTitle" + String(param)).value = "";
            document.getElementById("inputTodo" + String(param)).value = "";
            document.getElementById("inputDo" + String(param)).value = "";
            document.getElementById("inputDue" + String(param)).value = "";
            const removeBox = document.getElementbyId("box" + String(param));
            removeBox.empty();
            removeBox.remove();
            if (iterable > 0) { iterable--; }
        }

        function add() {
            const container = document.getElementById("boxes");
            const box = document.createElement("div");
            box.class = "box";
            box.id = "box" + iterable;

            const html1 = '<p id="textTitle' + iterable + '" class="text">Title:</p>';
            const html2 = '<input id="inputTitle' + iterable + '" autocomplete="off" type="text" class="input"></input>';
            const html3 = '<p id="textTodo' + iterable + '" class="text">To do:</p>';
            const html4 = '<input id="inputTodo' + iterable + '" autocomplete="off" type="text" class="input"></input>';
            const html5 = '<p id="spaceTodo'+ iterable +'" class="space">.</p>';
            const html6 = '<p id="textDo' + iterable + '" class="text">When to do:</p>';
            const html7 = '<input id="inputDo' + iterable + '" autocomplete="off" type="date" class="input"></input>';
            const html8 = '<p id="textDue' + iterable + '" class="text">When it\'s due:</p>';
            const html9 = '<input id="inputDue' + iterable + '" autocomplete="off" type="date" class="input"></input>';
            const html10 = '<p id="spaceButton" class="space">.</p>';
            const html11 = '<button id="done' + iterable + '" class="done" onClick=save(' + iterable + ')>Done Editing</button>';
            const html12 = '<button id="edit' + iterable + '" class="edit" onClick=edit(' + iterable + ')>Edit</button>';
            const html13 = '<button id="remove' + iterable + '" class="remove" onClick=remove(' + iterable + ')>Remove</button>';
            
            box.innerHTML = html1 + html2 + html3 + html4 + html5 + html6 + html7 + html8 + html9 + html10 + html11 + html12 + html13;

            box.style.width = "300px";
            box.style.backgroundColor = "#fff";
            box.style.marginLeft = "auto";
            box.style.marginRight = "auto";
            box.style.padding = "20px";

            const spacer = document.createElement("p");
            spacer.id = "boxSpace" + iterable;
            container.appendChild(spacer);

            container.appendChild(box);
            edit(iterable);
            iterable++;
        }