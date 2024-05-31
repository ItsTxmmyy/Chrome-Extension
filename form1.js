document.addEventListener('DOMContentLoaded', function() {
    // Select the button element by its ID
    const printButton = document.getElementById('printButton');

    // Add event listener to the button
    printButton.addEventListener('click', function(event) {
        const selectedOptions = collectSelectedOptions(); // Collect selected options
        printSelectedOptions(selectedOptions); // Print selected options
    });
});

function collectSelectedOptions() {
    const selectedOptions = [];

    // Feelings Section
    const feelingsSelectionCheckboxes = document.querySelectorAll('input[name^="HAPPY"], input[name^="CONFIDENT"], input[name^="SAD"], input[name^="ANGRY"], input[name^="CURIOUS"], input[name^="AFRAID"], input[name^="FLAT"]');
    const feelingsSelectionSection = [];
    feelingsSelectionCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const value = checkbox.parentNode.textContent.trim();
            feelingsSelectionSection.push(value);
        }
    });
    if (feelingsSelectionSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('Feelings Section:')
        selectedOptions.push(...feelingsSelectionSection);
    }

    // Toys/Play Behavior
    const toysPlayBehaviorCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="hammer/log/woodworking"], input[type="checkbox"][name^="sandbox/water/sink"], input[type="checkbox"][name^="theater/puppets"], input[type="checkbox"][name^="kitchen/cooking/food"], input[type="checkbox"][name^="easel/paint/chalkboard"], input[type="checkbox"][name^="bean bag/pillows/sheet/blanket"], input[type="checkbox"][name^="bop bag/foam bats/etc"], input[type="checkbox"][name^="dress up: clothes/fabrics/shoes/jewelry/hats/masks/wand"], input[type="checkbox"][name^="crafts/clay/markers/etc."], input[type="checkbox"][name^="doll house/doll family/bottle/pacifier/baby"], input[type="checkbox"][name^="cash register/money/phone"], input[type="checkbox"][name^="camera/flashlight"], input[type="checkbox"][name^="medical kit/bandages"], input[type="checkbox"][name^="musical instruments"], input[type="checkbox"][name^="games/bowling/ring toss/balls/etc."], input[type="checkbox"][name^="cars/trucks/bus/emergency vehicles/planes/boats/riding car"], input[type="checkbox"][name^="animals: domestic/zoo/alligator/dinosaurs/shark/snake"], input[type="checkbox"][name^="soldiers/guns/knife/sword/handcuffs/rope"], input[type="checkbox"][name^="constructive toys/blocks/barricade"], input[type="checkbox"][name^="sandtray/miniatures"]');
    const toysPlayBehaviorSection = [];

    toysPlayBehaviorCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const label = checkbox.parentNode.textContent.trim().replace(/:$/, '');
            toysPlayBehaviorSection.push(label);
        }
    });

    if (toysPlayBehaviorSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('TOYS/PLAY BEHAVIOR:');
        selectedOptions.push(...toysPlayBehaviorSection);
    }

    // Significant Verbalization
    const verbalizationText = document.getElementById('verbalization').value.trim();

    if (verbalizationText) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('SIGNIFICANT VERBALIZATION:');
        selectedOptions.push(verbalizationText);
    }

    // Dynamics of Session
    const dynamicsOfSessionInputs = document.querySelectorAll('input[id^="childActivityLvlInput"], input[id^="intensityPlayInput"], input[id^="inclusionTherapistInput"], input[id^="destructiveInput"], input[id^="messyChaoticInput"]');
    const dynamicsOfSessionSection = [];
    dynamicsOfSessionInputs.forEach(input => {
        const value = input.value.trim();
        if (value !== '') {
            const label = input.parentNode.textContent.trim().replace(/:$/, '');
            dynamicsOfSessionSection.push(`${label}: ${value}`);
        }
    });
    if (dynamicsOfSessionSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('DYNAMICS OF SESSION: Rate Child\'s Overall Play Behavior');
        selectedOptions.push(...dynamicsOfSessionSection);
    }

    // Limits Set
    const limitsSetInputs = document.querySelectorAll('input[id^="protectChildInput"], input[id^="protectTherapistInput"], input[id^="protectRoomToysInput"], input[id^="structuringInput"], input[id^="realityTestingInput"]');
    const limitsSetSection = [];
    limitsSetInputs.forEach(input => {
        const value = input.value.trim();
        if (value !== '') {
            const label = input.parentNode.textContent.trim().replace(/:$/, '');
            limitsSetSection.push(`${label}: ${value}`);
        }
    });
    if (limitsSetSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('LIMITS SET:');
        selectedOptions.push(...limitsSetSection);
    }

    // Significant Verbalization
    const conceptualizationText = document.getElementById('conceptualization').value.trim();

    if (verbalizationText) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('CONCEPTUALIZATION:');
        selectedOptions.push(conceptualizationText);
    }

    // Plan Recommendations
    const planRecommendationsCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="parentConsult"], input[type="checkbox"][name^="medicationEvaluation"], input[type="checkbox"][name^="familySession"], input[type="checkbox"][name^="psychologicalTesting"], input[type="checkbox"][name^="sibling"], input[type="checkbox"][name^="schoolConsult"], input[type="checkbox"][name^="friend"], input[type="checkbox"][name^="classroomObservation"], input[type="checkbox"][name^="filialTherapy"], input[type="checkbox"][name^="professionalConsult"], input[type="checkbox"][name^="therapyForParents"], input[type="checkbox"][name^="requestRecords"], input[type="checkbox"][name^="recommendParentResources"], input[type="checkbox"][name^="otherPlansRecommendations"]');
    const planRecommendationsSection = [];
    planRecommendationsCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const value = checkbox.parentNode.textContent.trim();
            if (checkbox.name === 'otherPlansRecommendations') {
                const otherText = checkbox.parentNode.querySelector('input[name="otherText"]').value.trim();
                if (otherText) {
                    planRecommendationsSection.push(`${value} ${otherText}`);
                } else {
                    planRecommendationsSection.push(value);
                }
            } else {
                planRecommendationsSection.push(value);
            }
        }
    });

    if (planRecommendationsSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('Plan Recommendations:');
        selectedOptions.push(...planRecommendationsSection);
    }

    // Open new window and display selected options
    const newWindow = window.open('', 'Selected Options', 'width=800,height=600');
    newWindow.document.write('<pre>');
    selectedOptions.forEach(option => {
        newWindow.document.write(`${option}\n`);
    });
    newWindow.document.write('</pre>');
    newWindow.document.close();
}