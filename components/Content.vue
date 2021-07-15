<template>
  <div class="section">
    <Fieldset :title="$t('content.announcements')">
      <div class="announcements">
        <p class="text highlight">{{ $t('content.anouncements_date_1') }}</p>
        <p class="text">{{ $t('content.anouncements_date_1_text') }}</p>
        <p class="text highlight">{{ $t('content.anouncements_date_2') }}</p>
        <p class="text">{{ $t('content.anouncements_date_2_text') }}</p>
      </div>
    </Fieldset>
    <Fieldset :title="$t('content.prices')">
      <Prices />
    </Fieldset>
    <Fieldset :title="$t('content.how_to_play')">
      <i18n tag="p" path="content.instruction_1" class="text">
        <span class="highlight">1.</span>
        <span class="highlight">
          {{ $t('content.instruction_1_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_2" class="text">
        <span class="highlight">2.</span>
        <span class="highlight">
          {{ $t('content.instruction_2_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_3" class="text">
        <span class="highlight">3.</span>
        <span class="highlight">
          {{ $t('content.instruction_3_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_4" class="text">
        <span class="highlight">4.</span>
        <span class="highlight">
          {{ $t('content.instruction_4_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_5" class="text">
        <span class="highlight">5.</span>
        <span class="highlight">
          {{ $t('content.instruction_5_0') }}
        </span>
        <span class="highlight">
          {{ $t('content.instruction_5_1') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_6" class="text">
        <span class="highlight">6.</span>
        <span class="highlight">
          {{ $t('content.instruction_6_0') }}
        </span>
        <span class="highlight">
          {{ $t('content.instruction_6_1') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_7" class="text">
        <span class="highlight">7.</span>
        <span class="highlight">
          {{ $t('content.instruction_7_0') }}
        </span>
        <a href="https://sheikah.app" target="_blank" class="highlight">
          {{ $t('content.instruction_7_1') }}
        </a>
        <span class="highlight">
          {{ $t('content.instruction_7_2') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_8" class="text">
        <span class="highlight">8.</span>
        <span class="highlight">
          {{ $t('content.instruction_8_0') }}
        </span>
        <span class="highlight">
          {{ $t('content.instruction_8_1') }}
        </span>
        <span class="highlight">
          {{ $t('content.instruction_8_2') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_9" class="text">
        <span class="highlight">9.</span>
        <span class="highlight">
          {{ $t('content.instruction_9_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_10" class="text">
        <span class="highlight">10.</span>
        <span class="highlight">
          {{ $t('content.instruction_10_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_11" class="text">
        <span class="highlight">11.</span>
        <span class="highlight">
          {{ $t('content.instruction_11_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_12" class="text">
        <span class="highlight">12.</span>
        <span class="highlight">
          {{ $t('content.instruction_12_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.instruction_13" class="text">
        <span class="highlight">13.</span>
        <span class="highlight">
          {{ $t('content.instruction_13_0') }}
        </span>
      </i18n>
    </Fieldset>
    <Fieldset :title="$t('content.get_your_first_creatures')">
      <p class="text">{{ $t('content.get_first_creatures_text') }}</p>
    </Fieldset>
    <Fieldset :title="$t('content.get_rest_witty_creatures')">
      <i18n tag="p" path="content.get_rest_witty_creatures_1" class="text">
        <span class="highlight">
          {{ $t('content.get_rest_witty_creatures_1_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.get_rest_witty_creatures_2" class="text">
        <span class="highlight">
          {{ $t('content.get_rest_witty_creatures_2_0') }}
        </span>
      </i18n>
      <i18n tag="p" path="content.get_rest_witty_creatures_3" class="text">
        <span class="highlight">
          {{ $t('content.get_rest_witty_creatures_3_0') }}
        </span>
      </i18n>
    </Fieldset>
    <Fieldset :title="$t('content.what_is_witnet')">
      <i18n tag="p" path="content.what_is_witnet_text" class="text">
        <a href="https://witnet.io/" target="_blank" class="highlight">
          {{ $t('content.what_is_witnet_text_0') }}
        </a>
      </i18n>
    </Fieldset>
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin: 0 auto;
  max-width: 800px;
  justify-items: center;
  display: flex;
  flex-direction: column;
  .announcements {
    display: grid;
    grid-template: max-content max-content/ max-content max-content;
    grid-gap: 16px;
  }
  .text {
    font-size: 18px;
    line-height: 1.5;
  }
  .highlight {
    font-weight: 600;
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
