<script setup lang="ts">
const {
  title = 'Nethsara Elvitigala',
  description = 'Explore this page on my personal portfolio.',
  section = 'Portfolio',
} = defineProps<{
  title?: string
  description?: string
  section?: string
}>()
</script>

<template>
  <div
    style="height: 100%; width: 100%; display: flex; position: relative; overflow: hidden; background-color: #050505; font-family: Inter, sans-serif;"
  >
    <!-- Background glow — top left -->
    <div
      style="position: absolute; top: -100px; left: -60px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 65%);"
    />
    <!-- Background glow — bottom right -->
    <div
      style="position: absolute; bottom: -80px; right: -40px; width: 380px; height: 380px; border-radius: 50%; background: radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 65%);"
    />

    <!-- Top gradient line -->
    <div
      style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, transparent 0%, #6366f1 30%, #8b5cf6 70%, transparent 100%);"
    />
    <!-- Bottom gradient line -->
    <div
      style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent 0%, #4f46e5 40%, #7c3aed 60%, transparent 100%);"
    />

    <!-- Left decorative column of dots -->
    <div
      style="position: absolute; left: 40px; top: 0; bottom: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;"
    >
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(99,102,241,0.6);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(99,102,241,0.4);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(99,102,241,0.6);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(99,102,241,0.3);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(99,102,241,0.5);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(99,102,241,0.2);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(99,102,241,0.4);" />
    </div>
    <!-- Right decorative column of dots -->
    <div
      style="position: absolute; right: 40px; top: 0; bottom: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;"
    >
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(139,92,246,0.4);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(139,92,246,0.6);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(139,92,246,0.3);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(139,92,246,0.5);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(139,92,246,0.2);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(139,92,246,0.4);" />
      <div style="width: 3px; height: 3px; border-radius: 50%; background: rgba(139,92,246,0.6);" />
    </div>

    <!-- Main centered content -->
    <div
      style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; padding: 64px 120px; position: relative; z-index: 10;"
    >
      <!-- Section breadcrumb badge -->
      <div
        style="display: flex; align-items: center; gap: 10px; margin-bottom: 28px;"
      >
        <div style="width: 28px; height: 1px; background: rgba(99,102,241,0.5);" />
        <div
          style="display: flex; align-items: center; gap: 7px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.3); border-radius: 9999px; padding: 6px 18px;"
        >
          <div style="width: 6px; height: 6px; border-radius: 50%; background: #6366f1;" />
          <span style="color: #818cf8; font-size: 13px; font-weight: 700; letter-spacing: 2px;">{{ section.toUpperCase() }}</span>
        </div>
        <div style="width: 28px; height: 1px; background: rgba(99,102,241,0.5);" />
      </div>

      <!-- Page title -->
      <div
        style="font-size: 64px; font-weight: 700; line-height: 1.05; color: #ffffff; letter-spacing: -2px; text-align: center; margin-bottom: 24px; max-width: 820px;"
      >
        {{ title }}
      </div>

      <!-- Decorative separator -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 28px;">
        <div style="width: 48px; height: 1px; background: linear-gradient(90deg, transparent, rgba(99,102,241,0.6));" />
        <div style="width: 6px; height: 6px; border-radius: 50%; background: #6366f1;" />
        <div style="width: 6px; height: 6px; border-radius: 50%; background: #8b5cf6;" />
        <div style="width: 6px; height: 6px; border-radius: 50%; background: #6366f1;" />
        <div style="width: 48px; height: 1px; background: linear-gradient(90deg, rgba(99,102,241,0.6), transparent);" />
      </div>

      <!-- Description -->
      <div
        style="color: #9ca3af; font-size: 17px; line-height: 1.65; text-align: center; max-width: 680px; margin-bottom: 44px;"
      >
        {{ description }}
      </div>

      <!-- Footer: branding -->
      <div style="display: flex; align-items: center; gap: 16px;">
        <!-- Avatar ring -->
        <div
          style="width: 44px; height: 44px; border-radius: 50%; padding: 2px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
        >
          <div style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden; border: 2px solid #050505;">
            <img
              src="/images/profile/nethsara.jpg"
              width="36"
              height="36"
              style="width: 36px; height: 36px; object-fit: cover; border-radius: 50%;"
            >
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 2px;">
          <span style="color: #e5e7eb; font-size: 15px; font-weight: 700;">Nethsara Elvitigala</span>
          <span style="color: #6366f1; font-size: 13px; font-weight: 500;">nethsara.me</span>
        </div>

        <!-- Divider -->
        <div style="width: 1px; height: 32px; background: rgba(99,102,241,0.3); margin: 0 4px;" />

        <!-- Role -->
        <span style="color: #6b7280; font-size: 13px; font-weight: 500;">Senior Software Engineer</span>
      </div>
    </div>
  </div>
</template>
