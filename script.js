document.addEventListener('DOMContentLoaded', function() {

    function updateStatus() {
        fetch('https://lucky-jet-history.gamedev-atech.cc/public/history/api/history/replay')
            .then(response => response.json())
            .then(data => {
                const contentElement = document.getElementById('content');
                const stopCoefficients = data.stop_coefficients;

                let contentClass;
                let textContent;

                if (Array.isArray(stopCoefficients) && stopCoefficients.length === 1 && stopCoefficients[0] === null) {
                    contentClass = 'state-wait';
                    textContent = 'Wait';
                } else {
                    contentClass = 'state-take';
                    textContent = 'Take!';
                }

                if (contentElement.className !== contentClass) {
                    contentElement.className = contentClass;

                    const textElement = contentElement.querySelector('#state');
                    textElement.textContent = textContent;
                }
            })
            .catch(error => console.error('Error fetching status:', error));
    }

    setInterval(updateStatus, 100);

    updateStatus();
});
