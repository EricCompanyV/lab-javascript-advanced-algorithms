const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  warningBottomStack.style.display = "none"
  warningTopStack.style.display = "none"
  stackList.innerHTML = ''
  
  newStack.display().forEach(element => {
    let li = document.createElement('li')
    li.innerText = element
    li.className = "active"
    stackList.appendChild(li)
  })
  let length = newStack.display().length
  let size = newStack.MAX_SIZE - length
  for(let i=0; i<size; ++i) {
    let li = document.createElement('li')
    li.innerHTML = '&nbsp'
    li.className = "inactive"
    stackList.appendChild(li)
  }
};

renderListStack();

const generateWarningStack = (type) => {
    if (type === 'underflow') {    
    warningBottomStack.style.display = 'block';
    console.log(warningBottomStack.style.display)
    warningBottomStack.innerText = 'STACK_UNDERFLOW'
  } else if (type === 'overflow') {    
    warningTopStack.style.display = 'block'
    warningTopStack.innerText = 'STACK_OVERFLOW'
  }
};

const addToStack = () => {
  try {
    newStack.push(stackInput.value)
    renderListStack() 
  } catch (error) {
    generateWarningStack('overflow')
    console.warn(error)
  }
  
};

const removeFromStack = () => {
  try {
    newStack.pop()
    renderListStack()
  } catch (error) {
    generateWarningStack('underflow')
  console.warn(error)
  }
  
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
