<template>
  <div class="container p-5">
    <h1 class="h3 mb-3 text-center">پلن ها و قیمت</h1>

    <div class="row">
      <div class="col-md-10 col-xl-8 mx-auto">
        <h1 class="text-center">یک پلن برای هر شخص</h1>
        <p class="lead text-center mb-4">
          فعلا تمامی فیلم ها رایگان است
        </p>

        <div class="row justify-content-center mt-3 mb-2">
          <div class="col-auto">
            <nav class="nav btn-group">
              <a
                href="#monthly"
                class="btn btn-outline-purple active"
                data-toggle="tab"
                >اشتراک ماهانه</a
              >
              <a
                href="#annual"
                class="btn btn-outline-purple"
                data-toggle="tab"
                >اشتراک سالانه</a
              >
            </nav>
          </div>
        </div>

        <div class="tab-content">
          <div class="tab-pane fade show active" id="monthly">
            <div class="row py-4">
              <div class="col-sm-4 mb-3 mb-md-0 p-1">
                <div class="card text-center h-100">
                  <div class="card-body d-flex flex-column">
                    <div class="mb-4" dir="rtl">
                      <h5>رایگان</h5>
                      <span class="display-4">
                        0 
                        <br>
                        تومان
                      </span>
                    </div>
                    <h6 dir="rtl">شامل:</h6>
                    <ul class="list-unstyled py-5">
                      <li class="mb-2" dir="rtl">1 کاربر</li>
                      <li class="mb-2">فقط فیلم های رایگان</li>
                      <!-- <li class="mb-2">5 GB storage</li> -->
                    </ul>
                    <div class="mt-auto">
                      <a href="/register" class="btn btn-lg btn-outline-purple"
                        >ثبت نام</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-3 mb-md-0 p-1">
                <div class="card text-center h-100">
                  <div class="card-body d-flex flex-column">
                    <div class="mb-4">
                      <h5>محبوب</h5>
                      <span class="display-4">19<br/>تومان</span>
                      <span>/ماهانه</span>
                    </div>
                    <h6>شامل:</h6>
                    <ul class="list-unstyled py-5">
                      <li class="mb-2" dir="rtl">1 کاربر</li>
                      <li class="mb-2">تمام فیلم ها و سریال ها</li>
                    </ul>
                    <div class="mt-auto">
                      <a href="#" class="btn btn-lg btn-purple"
                        >خرید و ورود</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-3 mb-md-0 p-1">
                <div class="card text-center h-100">
                  <div class="card-body d-flex flex-column">
                    <div class="mb-4">
                      <h5>پلاس</h5>
                      <span class="display-4">39<br/>تومان</span>
                      <span>/ماهانه</span>
                    </div>
                    <h6 dir="rtl">شامل:</h6>
                    <ul class="list-unstyled py-5">
                      <li class="mb-2" dir="rtl">3 کاربر</li>
                      <li class="mb-2">تمام فیلم ها و سریال ها</li>
                    </ul>
                    <div class="mt-auto">
                      <a href="#" class="btn btn-lg btn-outline-purple"
                        >خرید و ورود</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="annual">
            <div class="row py-4">
              <div class="col-sm-4 mb-3 mb-md-0 p-1">
                <div class="card text-center h-100">
                  <div class="card-body d-flex flex-column">
                    <div class="mb-4" dir="rtl">
                      <h5>رایگان</h5>
                      <span class="display-4">0 <br> تومان</span>
                    </div>
                    <h6 dir="rtl">شامل:</h6>
                    <ul class="list-unstyled py-5">
                      <li class="mb-2" dir="rtl">1 کاربر</li>
                      <li class="mb-2">فقط فیلم های رایگان</li>
                      <!-- <li class="mb-2">5 GB storage</li> -->
                    </ul>
                    <div class="mt-auto">
                      <a href="/register" class="btn btn-lg btn-outline-purple"
                        >ثبت نام</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-3 mb-md-0 p-1">
                <div class="card text-center h-100">
                  <div class="card-body d-flex flex-column">
                    <div class="mb-4">
                      <h5>محبوب</h5>
                      <span class="display-4">199 <br /> تومان</span>
                      <span class="text-small4">/سالانه</span>
                    </div>
                    <h6>شامل:</h6>
                    <ul class="list-unstyled py-5">
                      <li class="mb-2" dir="rtl">2 کاربر</li>
                      <li class="mb-2"> تمام فیلم ها و سریال ها</li>
                    </ul>
                    <div class="mt-auto">
                      <a href="#" class="btn btn-lg btn-purple"
                        >خرید و ورود</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-3 mb-md-0 p-1">
                <div class="card text-center h-100">
                  <div class="card-body d-flex flex-column">
                    <div class="mb-4">
                      <h5>پلاس</h5>
                      <span class="display-4">399 <br /> تومان</span>
                      <span>/سالانه</span>
                    </div>
                    <h6>شامل:</h6>
                    <ul class="list-unstyled py-5">
                      <li class="mb-2" dir="rtl">4 کاربر</li>
                      <li class="mb-2"> تمام فیلم ها و سریال ها</li>
                    </ul>
                    <div class="mt-auto">
                      <a href="#" class="btn btn-lg btn-outline-purple"
                        >خرید و ورود</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <!-- <div class="text-center my-4">
          <h2>Frequently asked questions</h2>
        </div>
        <div class="row">
          <div class="col-md-5 col-sm-6 ml-auto">
            <div class="card">
              <div class="card-body">
                <h5 class="h6 card-title">
                  Do I need a credit card to sign up?
                </h5>
                <p class="mb-0">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-6 mr-auto">
            <div class="card">
              <div class="card-body">
                <h5 class="h6 card-title">Do you offer a رایگان trial?</h5>
                <p class="mb-0">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-6 ml-auto">
            <div class="card">
              <div class="card-body">
                <h5 class="h6 card-title">
                  What if I decide to cancel my plan?
                </h5>
                <p class="mb-0">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-6 mr-auto">
            <div class="card">
              <div class="card-body">
                <h5 class="h6 card-title">Can I cancel at anytime?</h5>
                <p class="mb-0">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                  sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                  hendrerit id, lorem.
                </p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>



<script>
// import 'video.js/dist/video-js.min.css';

// import 'video.js/dist/video.min.js';

export default {
  name: "subscription",
};
</script>

<style scoped>
.btn-outline-purple {
    color: rgb(161, 31, 60, 0.95);
    border: rgb(161, 31, 60, 0.95) 1px solid;
}

.nav .active  {
    color: white!important;
    background-color: rgb(161, 31, 60, 0.95)!important;
}

.btn-purple {
    color: white;
    background-color: rgb(161, 31, 60, 0.95);
}

</style>