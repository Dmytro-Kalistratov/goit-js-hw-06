const counterValue = {
    value: 0,

    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },

    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    }
};

const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
    counterValue.increment();
    value.textContent = counterValue.value;
});

decrementBtn.addEventListener('click', () => {
    counterValue.decrement();
    value.textContent = counterValue.value;
});