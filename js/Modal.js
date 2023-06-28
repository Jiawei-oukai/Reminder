
export function openEditModal(reminderDiv) {
    // 显示模态框
    editModal.style.display = "block";

    // 从reminder div中提取信息
    const name = reminderDiv.querySelector('.reminder-title').textContent;
    const description = reminderDiv.querySelector('.reminder-description').textContent;
    const time = reminderDiv.dataset.time

    // 将当前reminder的内容填入编辑框中
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-description').value = description;
    document.getElementById('edit-time').value = time;

    // 保存这个reminder对应的HTML元素
    editModal.element = reminderDiv;
}