// Use this sample to create your own voice commands
intent('Hi, how are you', p => {
    p.play('Good, thank you');
});

intent('This is my second intent', p => {
    p.play('Good for you');
});

intent('This is my third intent', p => {
    p.play('OK, keep on going');
});

