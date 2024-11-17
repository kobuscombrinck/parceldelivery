// Load data from localStorage on initialization
    const storedData = localStorage.getItem('parcelDeliveryAppData');
    export const data = storedData ? JSON.parse(storedData) : {
      customers: [/* ... initial customer data with 'area' property */],
      deliveries: [/* ... initial delivery data */],
      trucks: [/* ... initial truck data */],
    };

    // Save data to localStorage whenever it changes
    let timeoutId;
    export const setData = (newData) => {
      clearTimeout(timeoutId); // Debounce to avoid excessive saves
      timeoutId = setTimeout(() => {
        localStorage.setItem('parcelDeliveryAppData', JSON.stringify(newData));
        Object.assign(data, newData); // Update the in-memory data as well
      }, 200); // Adjust debounce time as needed
    };
