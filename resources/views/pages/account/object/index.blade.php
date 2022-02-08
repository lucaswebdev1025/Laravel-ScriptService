<title>{{ __('Добавление объекта') }}</title>
@section('PageName','Добавление объекта')
@section('breadcrumbs')
    <li class="breadcrumb-item text-gray-600">
        <a href="/" class="text-muted text-hover-primary">
            Рабочая панель
        </a>
    </li>
    <li class="breadcrumb-item text-gray-600">
        <a href="/account/project" class="text-muted text-hover-primary">
            Мои проекты
        </a>
    </li>
    <?php if (isset($project_info)) { ?>
    <li class="breadcrumb-item text-gray-600">
        <a href="/account/project/{{ $project_info->project_id }}" class="text-muted text-hover-primary">
            {{ $project_info->project_name }}
        </a>
    </li>
    <?php } ?>
    <li class="breadcrumb-item text-gray-500">Добавление объекта</li>
@endsection
<x-base-layout>

        <!--begin::Toolbar-->
        <div class="toolbar" id="kt_toolbar">
            <!--begin::Container-->
            <!--end::Container-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-xxl">
                <!--begin::Contact-->
                <div class="card px-0 px-lg-5 pt-0 pb-0">
                    <!--begin::Body-->
                    <div class="card-body ">
                        <!--begin::Row-->
                        <div>
                            <!--begin::Col-->
                            <div>
                                <!--begin::Form-->
                                <form action="" class="form mb-15 fv-plugins-bootstrap5 fv-plugins-framework" method="post" id="kt_contact_form">
                                    @csrf
                                    @method('PUT')
                                    <!--begin::Input group-->
                                    <div class="row mb-8 g-9">
                                        <!--begin::Col-->
                                        <div class="col-lg-6 fv-row fv-plugins-icon-container">
                                            <label class="fs-6 fw-bold mb-2">Код объекта</label>
                                            <input type="text" required class="form-control form-control-solid" placeholder="Введите код объекта" name="object_number">
                                            <div class="fv-plugins-message-container invalid-feedback"></div></div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col-lg-6 fv-row fv-plugins-icon-container">
                                            <label class="fs-6 fw-bold mb-2">Наименование объекта</label>
                                            <input type="text" required class="form-control form-control-solid" placeholder="Введите наименование объекта" name="object_name">
                                            <div class="fv-plugins-message-container invalid-feedback"></div>
                                            <div class="objNameNotDone" data-field="password" data-validator="callback " style="font-size: 0.925rem;color: #F1416C; display: none">Объект с таким названием уже добавлен в проект</div>
                                        </div>

                                        <!--end::Col-->
                                    </div>
                                    <div class="row mb-8 g-9">
                                        <div class="col-md-6 fv-row fv-plugins-icon-container">
                                            <div class="col-lg-12 fv-row mb-8  fv-plugins-icon-container">
                                                <label class="fs-6 fw-bold mb-2">Кадастровый номер</label>
                                                <input  required class="form-control form-control-solid" placeholder="Введите кадастровый номер" name="cadastral_number">
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div class="col-lg-12 mb-8 fv-row fv-plugins-icon-container">
                                                <label class="fs-6 fw-bold mb-2">Карта</label>
                                                <figure>
                                                    <img class="col-lg-12 img-responsive" src="https://git.esk-solutions.com/esk/ship/uploads/8b01dc279a5ae29c510768de33a8f950/image.png" alt="image">
                                                </figure>
                                            </div>
                                        </div>
                                        <!--begin::Col-->
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col-md-6 fv-row fv-plugins-icon-container">
                                            <div class="col-lg-12 fv-row mb-8 fv-plugins-icon-container">
                                                <label class="fs-6 fw-bold mb-2">Описание объекта</label>
                                                <textarea class="form-control form-control-solid" placeholder="Описание объекта" name="object_description" style="min-height: 170px !important;"></textarea>
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div class="col-lg-12 fv-row mb-8 fv-plugins-icon-container">
                                                <label class="fs-5 fw-bold mb-2">Регион/Край/Область</label>
                                                <select name="regin_id" id="regin_id" required data-placeholder="Выберите регион" class="form-select form-select-solid form-select-lg fw-bold" style="display: none">
                                                    <option value="">Выберите регион</option>
                                                    <?php if (isset($regions)){ ?>
                                                    @foreach($regions as $key => $value)
                                                        <option value="{{ $key }}">{{ $regions[$key]->name }}</option>
                                                    @endforeach
                                                    <?php } ?>
                                                </select>
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div class="col-lg-12 fv-row mb-8 fv-plugins-icon-container">
                                                <label class="fs-6 fw-bold mb-2">Населенный пункт</label>
                                                <select name="city_id" id="city_id"  required data-placeholder="Выберите населенный пункт" class="form-select form-select-solid form-select-lg fw-bold" style="display: none">
                                                    <option selected value="">Выберите населенный пункт</option>
                                                    <option  value="-1">Нет моего города</option>
                                                </select>
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div class="col-lg-12 cityBlock mb-8"  style="display: none;">
                                                <label class="fs-6 fw-bold mb-2">Введите свой населенный пункт</label>
                                                <input class="form-control required form-control-solid"  placeholder="Введите свой населенный пункт" name="city_name">
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--begin::Submit-->
                                    <div class="row d-flex ">
                                        <div class="col-lg-6">
                                            <button type="submit" class="btn btn-primary" id="kt_contact_submit_button">
                                                <span class="indicator-label">Cохранить</span>
                                            </button>`
                                        </div>
                                    </div>
                                    <!--end::Submit-->
                                    <div></div></form>
                                <!--end::Form-->
                            </div>
                        </div>
                    </div>
                    <!--end::Body-->
                </div>
                <!--end::Contact-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script>
        var cities = <?=$cities?>;
        $(document).ready(function () {
            $("#regin_id").select2();
            $("#city_id").select2();
            // $('input[name="object_number"]').on('keydown', function(e){
            //     if(e.key.length == 1 && e.key.match(/[^0-9\-]/)){
            //         return false;
            //     };
            // });
            $('input[name="object_name"]').on('keydown', function(e){
                $('.objNameNotDone').hide();
                $('#kt_contact_submit_button').removeAttr("disabled");
                var _this = this;
                setTimeout(function (){
                    var objName = $(_this).val().trim();
                    console.log('object_name',$(_this).val());
                    $.ajax({
                        url: "/api/issetObjectName",
                        async: false,
                        type: 'GET',
                        data: {
                            object_name:objName,
                        },
                        success: function(data) {
                            var k = JSON.parse(data);
                            console.log('d',k.error);
                            if(k.error){
                                $('.objNameNotDone').show();
                                $('#kt_contact_submit_button').prop('disabled', true);
                            }

                            // location.reload();
                        },
                        error: function(err) {}
                    });
                },500);
            });
            $('#regin_id').on('change', function (e) {
                var regionId = $(this).select2('val');
                if(cities.length > 0){
                    $('#city_id').empty();
                    // var newOption = new Option('Выберите населенный пункт', '',false,false);
                    // $('#city_id').append(newOption).trigger('change');
                    for(var i = 0; i < cities.length; i++){
                        if(cities[i].region_id == regionId){
                            console.log('cities[i].region_id',cities[i].region_id);
                            var newOption = new Option(cities[i].name, cities[i].city_id,false,false);
                            $('#city_id').append(newOption).trigger('change');
                        }
                    }
                    var newOption = new Option('Нет моего города', '-1',false,false);
                    $('#city_id').append(newOption).trigger('change');
                }

            });
            $('#city_id').on('change', function (e) {
                var cityId = $(this).select2('val');
                if(cityId == -1){
                    $('.cityBlock').show();
                    if($('input[name="city_name"]').val().trim() == ""){
                        $('#kt_contact_submit_button').prop('disabled', true);
                    }else{
                        $('#kt_contact_submit_button').removeAttr("disabled");
                    }
                    return;
                }else{
                    $('.cityBlock').hide();
                }
            });
            $('input[name="city_name"]').on('keydown', function(e){
                if($('input[name="city_name"]').val().trim() == ""){
                    $('#kt_contact_submit_button').prop('disabled', true);
                }else{
                    $('#kt_contact_submit_button').removeAttr("disabled");
                }
            });
        });
    </script>

</x-base-layout>
