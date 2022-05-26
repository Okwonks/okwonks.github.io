<template>
  <section id="home">
    <div class="container-fluid">
      <div class="container" id="header">
        <div class="row">
          <div class="col-sm-5 intro">
            <h1>Hey! I'm <strong>Albert Oketch</strong>.</h1>
            <h1>I'm a full-stack Software Engineer</h1>
            <hr id="header-horizontal">
          </div>
          <div class="col-sm-12" id="ui-ux">
            <h1>
              <i class="icon-html5" id="html5"></i>
              <i class="icon-css3" id="css3-ui"></i>
              <i class="icon-javascript" id="javascript-ui"></i>
              <i class="icon-java" id="java-ui"></i>
              <i class="icon-python"></i>
              <font-awesome-icon :icon="[ 'fab', 'android' ]" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import '../../css/font-mfizz/font-mfizz.css';

@media screen and (min-width: 993px) {
  #home {
    margin-bottom: 50em;
  }
}

@media screen and (max-width: 992px) {
  #home {
    margin-bottom: 70em;
  }
}

@media screen and (max-width: 800px) {
  #home {
    margin-bottom: 0em;
  }
}

.intro {
  padding-top: 2em;
  font-size: 1.4em;
}
</style>
