<template>
  <div class="section">
    <Fieldset :title="$t('content.announcements')">
      <div class="announcements">
        <p class="text highlight">JUL 16 @ 9am</p>
        <p class="text">
          The game will begin on Tuesday 20th at 10:30am, right after the
          EthCC[4] opening ceremony.
        </p>
      </div>
    </Fieldset>
    <Fieldset :title="$t('content.prizes')">
      <prizes />
    </Fieldset>
    <Fieldset :title="$t('content.how_to_play')">
      <ol>
        <i18n tag="li" path="content.instruction_1" class="text">
          <span class="highlight">
            {{ $t('content.instruction_1_0') }}
          </span>
          <a href="https://witnet.io" target="_blank">
            {{ $t('content.instruction_1_1') }}</a
          ><a href="https://ethcc.io" target="_blank">
            {{ $t('content.instruction_1_2') }}</a
          >
        </i18n>
        <i18n tag="li" path="content.instruction_2" class="text">
          <span class="highlight">
            {{ $t('content.instruction_2_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_3" class="text">
          <span class="highlight">
            {{ $t('content.instruction_3_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_4" class="text">
          <span class="highlight">
            {{ $t('content.instruction_4_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_5" class="text">
          <span class="highlight">
            {{ $t('content.instruction_5_0') }}
          </span>
          <span class="highlight">
            {{ $t('content.instruction_5_1') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_6" class="text">
          <span class="highlight">
            {{ $t('content.instruction_6_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_7" class="text">
          <a href="https://sheikah.app" target="_blank">
            {{ $t('content.instruction_7_0') }}
          </a>
          <span class="highlight">
            {{ $t('content.instruction_7_1') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_8" class="text"
          ><span class="highlight">{{ $t('content.instruction_8_0') }}</span
          ><span class="highlight">{{ $t('content.instruction_8_1') }}</span
          ><span class="highlight">{{ $t('content.instruction_8_2') }}</span>
        </i18n>
        <i18n tag="li" path="content.instruction_9" class="text">
          <span class="highlight">
            {{ $t('content.instruction_9_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_10" class="text">
          <span class="highlight">
            {{ $t('content.instruction_10_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_11" class="text">
          <span class="highlight">
            {{ $t('content.instruction_11_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_12" class="text">
          <span class="highlight">
            {{ $t('content.instruction_12_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.instruction_13" class="text">
          <span class="highlight">
            {{ $t('content.instruction_13_0') }}
          </span>
        </i18n>
      </ol>
    </Fieldset>
    <Fieldset :title="$t('content.get_your_first_creatures')">
      <i18n tag="p" path="content.get_first_creatures_text" class="text">
        <a href="https://witnet.io" target="_blank">
          {{ $t('content.instruction_1_1') }}</a
        ><a href="https://ethcc.io" target="_blank">
          {{ $t('content.instruction_1_2') }}</a
        >
      </i18n>
    </Fieldset>
    <Fieldset :title="$t('content.get_rest_witty_creatures')">
      <ul>
        <i18n tag="li" path="content.get_rest_witty_creatures_1" class="text">
          <span class="highlight">
            {{ $t('content.get_rest_witty_creatures_1_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.get_rest_witty_creatures_2" class="text">
          <span class="highlight">
            {{ $t('content.get_rest_witty_creatures_2_0') }}
          </span>
        </i18n>
        <i18n tag="li" path="content.get_rest_witty_creatures_3" class="text">
          <span class="highlight">
            {{ $t('content.get_rest_witty_creatures_3_0') }}
          </span>
        </i18n>
      </ul>
    </Fieldset>
    <Fieldset :title="$t('content.what_is_witnet')">
      <i18n tag="p" path="content.what_is_witnet_1" class="text">
        <a href="https://witnet.io/" target="_blank" class="highlight">
          {{ $t('content.what_is_witnet_1_0') }}
        </a>
      </i18n>
      <p class="text">
        {{ $t('content.what_is_witnet_2') }}
      </p>
    </Fieldset>
    <aside class="closing">
      <a href="https://witnet.io" target="_blank"
        ><img
          class="closing-logo"
          src="https://witnet.io/_nuxt/img/witnet_logo.4c8ecb3.svg"
          alt="Witnet"
      /></a>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin: 34px auto;
  max-width: 800px;
  justify-items: center;
  display: flex;
  flex-direction: column;
  .announcements {
    display: grid;
    grid-template: max-content 1fr / max-content 1fr;
    grid-gap: 16px;
  }
  .text,
  li {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 0.4em;
  }
  ol,
  ul {
    padding-left: 1.5em;
  }
  a[href] {
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;
  }
  .highlight {
    font-weight: 600;
  }
  .closing {
    text-align: center;
    margin: 40px 0 60px 0;
  }
  .closing-logo {
    width: 250px;
    max-width: 80vw;
  }
}
@media screen and (max-width: 600px) {
  .section {
    .announcements {
      grid-template-columns: 1fr;
    }
  }
}
@media screen and (max-width: 1200px) {
  .section {
    .announcements {
      grid-template-columns: 1fr;
    }
  }
}
</style>
