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
    const feelingsSelectionSection = {};

    feelingsSelectionCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const category = checkbox.name;
            const value = checkbox.value;
            if (!feelingsSelectionSection[category]) {
                feelingsSelectionSection[category] = [];
            }
            feelingsSelectionSection[category].push(value);
        }
    });

    if (Object.keys(feelingsSelectionSection).length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('FEELINGS:');
        for (const category in feelingsSelectionSection) {
            feelingsSelectionSection[category].forEach(value => {
                selectedOptions.push(`${category}: ${value}`);
            });
        }
    }

    if (feelingsSelectionSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('Feelings Section:');
        feelingsSelectionSection.forEach(value => {
            selectedOptions.push(value);
        });
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

    // Play Themes
    const playThemesSection = [];

    // List of checkbox and comment input IDs
    const ids = [
        { checkboxId: 'checkbox_RELATIONSHIP', commentId: 'comment_RELATIONSHIP' },
        { checkboxId: 'checkbox_POWER_CONTROL', commentId: 'comment_POWER_CONTROL' },
        { checkboxId: 'checkbox_HELPLESS_INADEQUATE', commentId: 'comment_HELPLESS_INADEQUATE' },
        { checkboxId: 'checkbox_AGGRESSION_REVENGE', commentId: 'comment_AGGRESSION_REVENGE' },
        { checkboxId: 'checkbox_SAFETY_SECURITY', commentId: 'comment_SAFETY_SECURITY' },
        { checkboxId: 'checkbox_MASTERY', commentId: 'comment_MASTERY' },
        { checkboxId: 'checkbox_NURTURING', commentId: 'comment_NURTURING' },
        { checkboxId: 'checkbox_DEATH_LOSS_GRIEVING', commentId: 'comment_DEATH_LOSS_GRIEVING' },
        { checkboxId: 'checkbox_OTHER', commentId: 'comment_OTHER' }
    ];

    ids.forEach(function(idPair) {
        const checkbox = document.getElementById(idPair.checkboxId);
        const commentInput = document.getElementById(idPair.commentId);

        if (checkbox && checkbox.checked) {
            const checkboxName = checkbox.name;
            const comment = commentInput ? commentInput.value : '';
            playThemesSection.push(`${checkboxName}: ${comment}`);
        }
    });

    if (playThemesSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('PLAY THEMES:');
        selectedOptions.push(...playThemesSection);
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

    // Overall Rating
    const sliders = [
        { id: 'behavior1', startLabel: 'Sad/depressed/angry/fearful', endLabel: 'Content/satisfied (Appropriate effect)' },
        { id: 'behavior2', startLabel: 'Anxious/insecure', endLabel: 'Confident/secure' },
        { id: 'behavior3', startLabel: 'Dependent/clingy/needy', endLabel: 'Autonomous/independent' },
        { id: 'behavior4', startLabel: 'Immature/regressed/hypermature', endLabel: 'Age appropriate' },
        { id: 'behavior5', startLabel: 'Low frustration tolerance', endLabel: 'High frustration tolerance' },
        { id: 'behavior6', startLabel: 'External locus of control', endLabel: 'Internal locus of control' },
        { id: 'behavior7', startLabel: 'Low energy/passive', endLabel: 'High energy/active' },
        { id: 'behavior8', startLabel: 'Inhibited/Constricted', endLabel: 'Creative/Expressive/Spontaneous/Free' },
        { id: 'behavior9', startLabel: 'Isolated/Detached', endLabel: 'Connected/Sense of Belonging' }
    ];

    const overallRatings = [];

    sliders.forEach(slider => {
        const input = document.querySelector(`#${slider.id}`);
        if (input) {
            const value = input.value;
            const outputString = `${slider.startLabel} - ${value} - ${slider.endLabel}`;
            overallRatings.push(outputString);
        }
    });

    if (overallRatings.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('Overall Ratings:');
        selectedOptions.push(...overallRatings);
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