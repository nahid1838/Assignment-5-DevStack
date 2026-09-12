Project Name : Assignment-5-DevStack

Description : A modern React-based Dev Stack Builder that allows users to explore different technologies and create their own technology stack.

Technologies Used :
                    - React
                    - TypeScript
                    - Tailwind CSS
                    - React Toastify
                    - React Icons
                    - Vite
                    - JSON

3 Features : 
            - Explore different web development technologies with detailed information.
            - Add technologies to Your Stack and remove them one by noe and remove all.
            - Show tost notification when adding, removing or clearing technologies.


Answer to the Question No 1 : 
JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. React uses JSX because it makes UI code easier to read, write, and understand.

Answer to the Question No 2 : 
Props are data passed from a parent component to a child component. Props are read-only.
State is data managed inside a component. State can change when the user interacts with the application.

Answer to the Question No 3 : 
The useState hook is used to create and manage changing data inside a React component. In this project, I used useState to store the technologies selected by the user for the Your Stack section.

Answer to the Question No 4 : 
useEffect is a React hook used to perform side effects, such as fetching data or interacting with external systems.
I did not use useEffect in this project. I loaded the local JSON data using a Promise and React's use() approach instead. So, useEffect was not necessary for loading the JSON data in my implementation.

Answer to the Question No 5 : 
React needs a unique key to identify each item in a list. It helps React understand which item was added, removed, or changed, so React can update the UI efficiently.

Answer to the Question No 6 : 
Conditional rendering means showing different UI elements depending on a condition. In my project I used many times 
{
                addedTechonlogi.length === 0 ? 
                <div>
                    <p className="text-[#94A3B8] text-center border border-dashed border-gray-300 py-10 rounded-lg">Your stack is empty.</p>
                </div> :
                addedTechonlogi.map(techonlogi => <YourStackCard 
                    key={techonlogi.id}
                    techonlogi={techonlogi}
                    addedTechonlogi={addedTechonlogi}
                    setAddedTechonlogi={setAddedTechonlogi}
                    ></YourStackCard>)
            }

Answer to the Question No 7 : 
I did passed parent component to a child component using props.
For example  <TechnologiCard 
            techonlogi={techonlogi}
            addedTechonlogi={addedTechonlogi}
            setAddedTechonlogi={setAddedTechonlogi}
            ></TechnologiCard>

And the child can send something back to the parent by calling the function received through props.
For example  <span onClick={()=>handleDeleteTechnlogi(techonlogi)}>
                <RxCross2 />
             </span > 