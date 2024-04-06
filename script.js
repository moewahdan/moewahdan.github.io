
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        if (name.trim() === '') {
            alert("Name is required!");
        } else {
             alert("Submit successful!");
    }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const colorScheme1 = {
        backgroundColor: '#000000',
        textColor: '#ffffff'
    };
    const colorScheme2 = {
        backgroundColor: '#007bff',
        textColor: '#ffffff'
    };
    const applyColorScheme = (scheme) => {
        document.body.style.backgroundColor = scheme.backgroundColor;
        document.body.style.color = scheme.textColor;
    };
    document.getElementById('colorScheme1').addEventListener('click', function() {
        applyColorScheme(colorScheme1);
    });

    document.getElementById('colorScheme2').addEventListener('click', function() {
        applyColorScheme(colorScheme2);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hoverText = document.getElementById('hoverText');
    
    hoverText.addEventListener('mouseenter', function() {
        hoverText.style.color = 'red';
    });

    hoverText.addEventListener('mouseleave', function() {
        hoverText.style.color = 'black';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenParagraph = document.getElementById('hiddenParagraph');
    
    toggleButton.addEventListener('click', function() {
        if (hiddenParagraph.style.display === 'none') {
            hiddenParagraph.style.display = 'block';
        } else {
            hiddenParagraph.style.display = 'none';
        }
    });
});
