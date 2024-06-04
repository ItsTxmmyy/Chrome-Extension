document.addEventListener('DOMContentLoaded', function() {
    // Select the button element by its ID
    const printButton = document.getElementById('printButton');
    const selectNormalButton = document.getElementById('selectNormalButton');

    // Add event listener to the select normal button
    selectNormalButton.addEventListener('click', function(event) {
        selectNormalCheckboxes(); // Call the function to select normal checkboxes
    });

    // Add event listener to the button
    printButton.addEventListener('click', function(event) {
        const selectedOptions = collectSelectedOptions(); // Collect selected options
        printSelectedOptions(selectedOptions); // Print selected options
    });
});

function selectNormalCheckboxes() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Define the values to be checked
    const valuesToCheck = ['normal', 'neat', 'good', 'full', 'euthymic', 'none', 'cooperative'];

    // Loop through checkboxes and check those with specified values
    checkboxes.forEach(function(checkbox) {
        if (valuesToCheck.includes(checkbox.value.toLowerCase())) {
            checkbox.checked = true;
        }
    });
}

function collectSelectedOptions() {
    const selectedOptions = [];

    // Observations - Appearance
    const appearanceCheckboxes = document.querySelectorAll('input[name="appearance"]:checked');
    const appearanceSection = [];
    appearanceCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        if (value !== 'other') {
            appearanceSection.push(value);
        }
    });

    // Check if Other option is selected and append its text input value
    const otherAppearanceChecked = document.getElementById('other_appearance').checked;
    if (otherAppearanceChecked) {
        const otherAppearanceText = document.getElementById('other_appearance_text').value;
        if (otherAppearanceText.trim() !== '') {
            appearanceSection.push(`Other: ${otherAppearanceText}`);
        }
    }

    if (appearanceSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('APPEARANCE:');
        selectedOptions.push(...appearanceSection);
    }

    // Observations - Speech
    const speechCheckboxes = document.querySelectorAll('input[name="speech"]:checked');
    const speechSection = [];
    speechCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        if (value !== 'other') {
            speechSection.push(value);
        }
    });

    // Check if Other option is selected and append its text input value
    const otherSpeechChecked = document.getElementById('other_speech').checked;
    if (otherSpeechChecked) {
        const otherSpeechText = document.getElementById('other_speech_text').value;
        if (otherSpeechText.trim() !== '') {
            speechSection.push(`Other: ${otherSpeechText}`);
        }
    }

    if (speechSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('SPEECH:');
        selectedOptions.push(...speechSection);
    }

    // Observations - Eye Contact
    const eyeContactCheckboxes = document.querySelectorAll('input[name="eye_contact"]:checked');
    const eyeContactSection = [];
    eyeContactCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        if (value !== 'other') {
            eyeContactSection.push(value);
        }
    });

    // Check if Other option is selected and append its text input value
    const eyeContactChecked = document.getElementById('other_eye_contact').checked;
    if (eyeContactChecked) {
        const otherEyeContactText = document.getElementById('other_eye_contact_text').value;
        if (otherEyeContactText.trim() !== '') {
            eyeContactSection.push(`Other: ${otherEyeContactText}`);
        }
    }

    if (eyeContactSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('EYE CONTACT:');
        selectedOptions.push(...eyeContactSection);
    }

    // Observations - Motor Activity
    const motorActivityCheckboxes = document.querySelectorAll('input[name="motor_activity"]:checked');
    const motorActivitySection = [];
    motorActivityCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        if (value !== 'other') {
            motorActivitySection.push(value);
        }
    });

    // Check if Other option is selected and append its text input value
    const motorActivityChecked = document.getElementById('other_motor_activity').checked;
    if (motorActivityChecked) {
        const otherMotorActivityText = document.getElementById('other_motor_activity_text').value;
        if (otherMotorActivityText.trim() !== '') {
            motorActivitySection.push(`Other: ${otherMotorActivityText}`);
        }
    }

    if (motorActivitySection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('MOTOR ACTIVITY:');
        selectedOptions.push(...motorActivitySection);
    }

    // Observations - Affect
    const affectCheckboxes = document.querySelectorAll('input[name="affect"]:checked');
    const affectSection = [];
    affectCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        if (value !== 'other') {
            affectSection.push(value);
        }
    });

    // Check if Other option is selected and append its text input value
    const affectChecked = document.getElementById('other_affect').checked;
    if (affectChecked) {
        const otherAffectText = document.getElementById('other_affect_text').value;
        if (otherAffectText.trim() !== '') {
            affectSection.push(`Other: ${otherAffectText}`);
        }
    }

    if (affectSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('AFFECT:');
        selectedOptions.push(...affectSection);
    }

    // Mood
    const moodCheckboxes = document.querySelectorAll('input[name="mood"]:checked');
    const moodSection = [];
    moodCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        moodSection.push(value);
    });
    if (moodSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('MOOD:');
        selectedOptions.push(...moodSection);
    }

    // Perception
    const perceptionCheckboxes = document.querySelectorAll('input[name="hallucinations"]:checked, input[name="perception"]:checked');
    const perceptionSection = [];
    perceptionCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        perceptionSection.push(value);
    });
    if (perceptionSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('PERCEPTION:');
        selectedOptions.push(...perceptionSection);
    }

    // Cognition - Orientation Impairment
    const orientationImpairmentCheckboxes = document.querySelectorAll('input[name="orientation_impairment"]:checked');
    const orientationImpairmentSection = [];
    orientationImpairmentCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        orientationImpairmentSection.push(value);
    });
    if (orientationImpairmentSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('ORIENTATION IMPAIRMENT:');
        selectedOptions.push(...orientationImpairmentSection);
    }

    // Cognition - Memory Impairment
    const memoryImpairmentCheckboxes = document.querySelectorAll('input[name="memory_impairment"]:checked');
    const memoryImpairmentSection = [];
    memoryImpairmentCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        memoryImpairmentSection.push(value);
    });
    if (memoryImpairmentSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('MEMORY IMPAIRMENT:');
        selectedOptions.push(...memoryImpairmentSection);
    }

    // Cognition - Attention
    const attentionCheckboxes = document.querySelectorAll('input[name="attention"]:checked');
    const attentionSection = [];
    attentionCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        attentionSection.push(value);
    });
    if (attentionSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('ATTENTION:');
        selectedOptions.push(...attentionSection);
    }

    // Thoughts - Suicidality
    const suicidalityCheckboxes = document.querySelectorAll('input[name="suicidality"]:checked');
    const suicidalitySection = [];
    suicidalityCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        suicidalitySection.push(value);
    });
    if (suicidalitySection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('SUICIDALITY:');
        selectedOptions.push(...suicidalitySection);
    }

    // Thoughts - Homicidality
    const homicidalityCheckboxes = document.querySelectorAll('input[name="homicidality"]:checked');
    const homicidalitySection = [];
    homicidalityCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        homicidalitySection.push(value);
    });
    if (homicidalitySection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('HOMICIDALITY:');
        selectedOptions.push(...homicidalitySection);
    }

    // Thoughts - Delusions
    const delusionsCheckboxes = document.querySelectorAll('input[name="delusions"]:checked');
    const delusionsSection = [];
    delusionsCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        delusionsSection.push(value);
    });
    if (delusionsSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('DELUSIONS:');
        selectedOptions.push(...delusionsSection);
    }

    // Behavior
    const behaviorCheckboxes = document.querySelectorAll('input[name="behavior"]:checked');
    const behaviorSection = [];
    behaviorCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        behaviorSection.push(value);
    });
    if (behaviorSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('BEHAVIOR:');
        selectedOptions.push(...behaviorSection);
    }

    // Insight
    const insightCheckboxes = document.querySelectorAll('input[name="insight"]:checked');
    const insightSection = [];
    insightCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        insightSection.push(value);
    });
    if (insightSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('INSIGHT:');
        selectedOptions.push(...insightSection);
    }

    // Judgment
    const judgmentCheckboxes = document.querySelectorAll('input[name="judgment"]:checked');
    const judgmentSection = [];
    judgmentCheckboxes.forEach(checkbox => {
        const value = checkbox.value;
        judgmentSection.push(value);
    });
    if (judgmentSection.length > 0) {
        selectedOptions.push('\n---------------------------\n');
        selectedOptions.push('JUDGMENT:');
        selectedOptions.push(...judgmentSection);
    }

    return selectedOptions;
}

function printSelectedOptions(selectedOptions) {
    // Open new window and display selected options
    const newWindow = window.open('', 'Selected Options', 'width=800,height=600');
    newWindow.document.write('<pre>');
    selectedOptions.forEach(option => {
        newWindow.document.write(`${option}\n`);
    });
    newWindow.document.write('</pre>');
    newWindow.document.close();
}
