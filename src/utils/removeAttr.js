export default function removeAttr() {
  const isContentEditable = document.getElementById('editable-heading').contentEditable;

  if(isContentEditable) {
    document.getElementById('txt1').contentEditable = false;
  }
 
}