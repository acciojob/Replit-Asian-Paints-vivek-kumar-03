//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');

    document.getElementById('change_button').addEventListener('click', () => {
      const blockId = document.getElementById('block_id').value;
      const color = document.getElementById('colour_id').value;

      // Reset all grid item colors to transparent first
      gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
      });

      // Change color of the specific block if valid
      const selectedBlock = document.getElementById(blockId);
      if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
      }
    });

    document.getElementById('Reset').addEventListener('click', () => {
      gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
      });
    });
