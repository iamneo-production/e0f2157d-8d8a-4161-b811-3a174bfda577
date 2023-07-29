export const loadScript = (src, onLoad) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = onLoad;
    document.body.appendChild(script);
};

export const createOptions = (amount, currency) => {
    return {
        key: 'rzp_test_hCCv26GSYPDolB',
        amount: amount,
        currency: currency,
        name: 'Booking Portal',
        description: 'Payment for purchase',
        image: 'https://your-store.com/logo.png',
        handler: () => {
            console.log('Payment success');
        },
        prefill: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            contact: '+1234567890',
        },
    };
};