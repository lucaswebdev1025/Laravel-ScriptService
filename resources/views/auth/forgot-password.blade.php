<x-auth-layout>
    <!--begin::Forgot Password Form-->
    <form method="POST" action="{{ theme()->getPageUrl('password.email') }}" class="form w-100" novalidate="novalidate" id="kt_password_reset_form">
    @csrf

        <!--begin::Heading-->
        <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">
                {{ __('Забыли пароль?') }}
            </h1>
            <!--end::Title-->

            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">
                {{ __('Введите Ваш электронный адрес, чтобы сменить пароль.') }}
            </div>
            <!--end::Link-->
        </div>
        <!--begin::Heading-->

        <!--begin::Input group-->
        <div class="fv-row mb-10">
            <label class="form-label fw-bolder text-gray-900 fs-6">{{ __('Email') }}</label>
            <input class="form-control form-control-solid" type="email" name="email" autocomplete="off" value="{{ old('email') }}" required autofocus/>
        </div>
        <!--end::Input group-->

        <!--begin::Actions-->
        <div class="d-flex flex-wrap justify-content-center pb-lg-0">
            <button type="submit" id="kt_password_reset_submit" class="btn btn-lg btn-primary fw-bolder me-4" style="font-size: 13px;">
                Отправить ссылку для смены пароля
            </button>

            <a href="{{ theme()->getPageUrl('login') }}" class="btn btn-lg btn-light-primary fw-bolder" style="font-size: 13px;">{{ __('Назад') }}</a>
        </div>
        <!--end::Actions-->
    </form>
    <!--end::Forgot Password Form-->

</x-auth-layout>
