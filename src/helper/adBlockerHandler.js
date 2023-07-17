const adBlockerHandler = (error) => {
    if (error.message === 'Network Error') {
        alert('لطفا برای استفاده بهتر از سایت adblocker را خاموش کنید.')
    }
};


export default adBlockerHandler;