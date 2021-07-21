let baseUpdate = document.getElementById('loadId');


function _createModel(options) {
    const modal = document.createElement('div')
    modal.classList.add('meinModal')
    modal.insertAdjacentHTML('afterbegin',`
        <div class="modalOverlay" data-close="true">
            <div class="modalWindow">
                <div class="head">
                    <span class="headTitle">Модальное окно</span>
                    <span class="headClose" data-close="true">&times;</span>
                </div>
                <div class="body" id="loadId">
                    <ul id="ul"></ul>
                </div>
                <div class="footer">
                    <div class="button" data-close="true">ОК</div>
                    <div class="button btnClose" data-close="true">Закрыть</div>
                </div>
            </div>
        </div>
`)
    document.body.appendChild(modal);
    return modal;
}

$.modal = function(options){
    const $modal = _createModel(options)

    const modal = {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, 200)
        },
    }
    $modal.addEventListener("click", event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    })
    return modal
}

