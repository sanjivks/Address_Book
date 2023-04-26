var Services = {
    Save_Contect(obj) {
        var btnstatus = $("#btnadd").val();

        if (btnstatus == "ADD") {
            itemJsonArry.push(obj);
        }
        else if (btnstatus == "UPDATE") {

            let itemindex = $("#btnHid").val();
            itemJsonArry[itemindex] = obj;
        }

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
        update();

    },
  
    get_Contect(obj) {
        let selectedElementIndex = $('.select-body').index($(obj));
        return selectedElementIndex;
    },

     edit_Data(itemindex) {
        let itemData = itemJsonArry[itemindex];
        return itemData;
        
    },

    delete_Data(itemindex) {

        itemJsonArry.splice(itemindex, 1);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
        update();

    }
}