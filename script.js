// Part 1: JavaScript Basics
        function checkAge() {
            // Get user input
            const ageInput = document.getElementById('userAge');
            const age = parseInt(ageInput.value);
            let message;
            
            // Validate input
            if (isNaN(age)) {
                message = "Please enter a valid number for age.";
            } else {
                // Conditional logic
                if (age < 0) {
                    message = "Age cannot be negative!";
                } else if (age < 13) {
                    message = "You are a child.";
                } else if (age < 18) {
                    message = "You are a teenager.";
                } else if (age < 65) {
                    message = "You are an adult.";
                } else {
                    message = "You are a senior.";
                }
            }
            
            // Output result
            document.getElementById('ageOutput').textContent = message;
        }
        
        function checkNumber() {
            const numberInput = document.getElementById('numberInput');
            const number = parseFloat(numberInput.value);
            let result;
            
            if (isNaN(number)) {
                result = "Please enter a valid number.";
            } else {
                // Using ternary operator for conditional
                result = number % 2 === 0 ? 
                    `${number} is an even number.` : 
                    `${number} is an odd number.`;
                
                // Additional condition
                result += number >= 0 ? 
                    " It is positive." : 
                    " It is negative.";
            }
            
            document.getElementById('numberOutput').textContent = result;
        }
        
        // Part 2: JavaScript Functions
        function calculateRectangleArea(width, height) {
            return width * height;
        }
        
        function calculateArea() {
            const widthInput = document.getElementById('width');
            const heightInput = document.getElementById('height');
            
            const width = parseFloat(widthInput.value);
            const height = parseFloat(heightInput.value);
            
            if (isNaN(width) || isNaN(height)) {
                document.getElementById('areaOutput').textContent = "Please enter valid numbers for width and height.";
            } else {
                const area = calculateRectangleArea(width, height);
                document.getElementById('areaOutput').textContent = `The area of the rectangle is: ${area}`;
            }
        }
        
        function formatGreeting(name, age) {
            return `Hello, ${name}! You are ${age} years old.`;
        }
        
        function showGreeting() {
            const nameInput = document.getElementById('userName');
            const ageInput = document.getElementById('userAge');
            
            const name = nameInput.value;
            const age = parseInt(ageInput.value);
            
            if (!name || isNaN(age)) {
                document.getElementById('greetingOutput').textContent = "Please enter your name and age first.";
            } else {
                const greeting = formatGreeting(name, age);
                document.getElementById('greetingOutput').textContent = greeting;
            }
        }
        
        // Part 3: JavaScript Loops
        function runForLoop() {
            const countInput = document.getElementById('loopCount');
            const count = parseInt(countInput.value);
            const outputElement = document.getElementById('forLoopOutput');
            
            // Clear previous output
            outputElement.innerHTML = '';
            
            if (isNaN(count) || count < 1) {
                outputElement.innerHTML = '<div class="loop-item">Please enter a valid number</div>';
                return;
            }
            
            // For loop to generate items
            for (let i = 1; i <= count; i++) {
                const item = document.createElement('div');
                item.className = 'loop-item';
                
                // Different styling for even/odd
                if (i % 2 === 0) {
                    item.style.background = 'linear-gradient(135deg, #ff7e5f, #feb47b)';
                }
                
                item.textContent = i;
                outputElement.appendChild(item);
            }
        }
        
        function runWhileLoop() {
            const numberInput = document.getElementById('whileLoopNumber');
            let count = parseInt(numberInput.value);
            const outputElement = document.getElementById('whileLoopOutput');
            
            outputElement.textContent = '';
            
            if (isNaN(count) || count < 1) {
                outputElement.textContent = "Please enter a valid number greater than 0.";
                return;
            }
            
            // While loop for countdown
            let outputText = "Countdown: ";
            while (count > 0) {
                outputText += count + " ";
                count--;
            }
            outputText += "Liftoff! 🚀";
            
            outputElement.textContent = outputText;
        }
        
        // Part 4: DOM Manipulation
        function changeText() {
            const textElement = document.getElementById('textToChange');
            const phrases = [
                "JavaScript is powerful!",
                "DOM manipulation is fun!",
                "You can create dynamic websites!",
                "Web development is awesome!",
                "Keep learning and coding!"
            ];
            
            // Select a random phrase
            const randomIndex = Math.floor(Math.random() * phrases.length);
            textElement.textContent = phrases[randomIndex];
            
            // Change color for visual feedback
            textElement.style.color = getRandomColor();
        }
        
        function changeColor() {
            const colorBox = document.getElementById('colorBox');
            colorBox.style.backgroundColor = getRandomColor();
            colorBox.textContent = "New color!";
        }
        
        function toggleVisibility() {
            const textElement = document.getElementById('toggleText');
            
            if (textElement.style.display === 'none') {
                textElement.style.display = 'block';
            } else {
                textElement.style.display = 'none';
            }
        }
        
        function addItem() {
            const list = document.getElementById('itemList');
            const newItem = document.createElement('li');
            const items = [
                "New list item",
                "Another item",
                "Dynamic content",
                "JavaScript created this",
                "DOM manipulation"
            ];
            
            // Select a random item text
            const randomIndex = Math.floor(Math.random() * items.length);
            newItem.textContent = items[randomIndex];
            
            // Add with a slight animation
            newItem.style.opacity = '0';
            list.appendChild(newItem);
            
            // Fade in effect
            let opacity = 0;
            const fadeIn = setInterval(() => {
                opacity += 0.05;
                newItem.style.opacity = opacity;
                if (opacity >= 1) clearInterval(fadeIn);
            }, 30);
        }
        
        function resetDOM() {
            // Reset text
            document.getElementById('textToChange').textContent = 
                "This is the original text. Click the button to change me!";
            document.getElementById('textToChange').style.color = '#fff';
            
            // Reset color box
            document.getElementById('colorBox').style.backgroundColor = '';
            document.getElementById('colorBox').textContent = 'Color Box';
            
            // Reset toggle text
            document.getElementById('toggleText').style.display = 'block';
            
            // Reset list
            const list = document.getElementById('itemList');
            list.innerHTML = '<li>Initial item</li>';
            
            // Reset counter
            document.getElementById('counterValue').textContent = '0';
        }
        
        function incrementCounter() {
            const counterElement = document.getElementById('counterValue');
            let count = parseInt(counterElement.textContent);
            count++;
            counterElement.textContent = count;
            
            // Visual feedback
            counterElement.style.fontSize = '2.5rem';
            setTimeout(() => {
                counterElement.style.fontSize = '2rem';
            }, 200);
        }
        
        // Utility function to generate random colors
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        // Initialize the page with some content
        window.onload = function() {
            runForLoop();
        };