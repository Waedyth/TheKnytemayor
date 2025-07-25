let FreeWritingZone = document.getElementById('free-writing-zone');
FreeWritingZone.addEventListener('keydown', function(event) {
    if (event.key == 'Tab') {
        event.preventDefault();

        let StartingPosition = FreeWritingZone.selectionStart;
        let EndingPosition = FreeWritingZone.selectionEnd;

        let value = FreeWritingZone.value;

        FreeWritingZone.value = FreeWritingZone.value.substring(0, StartingPosition) + '\t' + value.substring(EndingPosition);

        FreeWritingZone.selectionStart = FreeWritingZone.selectionEnd = StartingPosition + 1;
    }
})