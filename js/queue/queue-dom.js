const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value=""
};

const generateListQueue = () => {
  warningTopQueue.style.display = "none"
  warningBottomQueue.style.display = "none"
  queueUL.innerHTML = ""
  queue.display().forEach(element => {
    let li = document.createElement("li")
    li.innerHTML = element
    li.className = "active"
    queueUL.appendChild(li)
  })
  let blankQueue = queue.MAX_SIZE - queue.display().length
  for (let i = 0; i < blankQueue; i++) {
    let li = document.createElement("li")
    li.innerHTML = "&nbsp"
    li.className = "inactive"
    queueUL.appendChild(li)
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = "block"
    warningBottomQueue.innerHTML = "QUEUE_UNDERFLOW"
  } else if (type === 'overflow') {
    warningTopQueue.style.display = "block"
    warningTopQueue.innerHTML = "QUEUE_OVERFLOW"
  }
};

const addToQueue = () => {
  try {
    queue.enqueue(queueInput.value)
    generateListQueue()
  } catch (error) {
    generateWarningQueue('overflow')
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue()
    generateListQueue()
  } catch (error) {
    generateWarningQueue('underflow')
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
