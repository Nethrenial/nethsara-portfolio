<script setup lang="ts">
const {
  title = 'Nethsara Elvitigala',
  description = 'Senior Software Engineer specializing in distributed systems & cloud-native architecture. Builds scalable backend and modern frontend apps with TypeScript, Java, Python.',
} = defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    style="height: 100%; width: 100%; display: flex; position: relative; overflow: hidden; background-color: #050505; font-family: Inter, sans-serif;"
  >
    <!-- Background radial glow — top right -->
    <div
      style="position: absolute; top: -80px; right: 60px; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%);"
    />
    <!-- Background radial glow — bottom left -->
    <div
      style="position: absolute; bottom: -120px; left: -40px; width: 360px; height: 360px; border-radius: 50%; background: radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%);"
    />

    <!-- Bottom gradient line -->
    <div
      style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent 0%, #6366f1 30%, #8b5cf6 70%, transparent 100%);"
    />

    <!-- Main content row -->
    <div
      style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 56px 64px 56px 80px; position: relative; z-index: 10;"
    >
      <!-- ── Left: Text ── -->
      <div style="display: flex; flex-direction: column; flex: 1; padding-right: 48px;">
        <!-- "Hello, I'm" label -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px;">
          <div style="width: 32px; height: 2px; background: #6366f1;" />
          <span style="color: #818cf8; font-size: 16px; font-weight: 600; letter-spacing: 3px;">HELLO, I'M</span>
        </div>

        <!-- Name -->
        <div
          style="font-size: 58px; font-weight: 700; line-height: 1.05; color: #ffffff; letter-spacing: -1.5px; margin-bottom: 18px;"
        >
          {{ title }}
        </div>

        <!-- Role badge -->
        <div
          style="display: flex; align-items: center; gap: 8px; background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.35); border-radius: 9999px; padding: 8px 20px; margin-bottom: 28px;"
        >
          <div style="width: 8px; height: 8px; border-radius: 50%; background: #6366f1;" />
          <span style="color: #a5b4fc; font-size: 17px; font-weight: 600;">Senior Software Engineer</span>
        </div>

        <!-- Description -->
        <div
          style="color: #9ca3af; font-size: 15px; line-height: 1.65; max-width: 500px; margin-bottom: 36px;"
        >
          {{ description }}
        </div>

        <!-- Footer row: URL + tech tags -->
        <div style="display: flex; align-items: center; gap: 12px;">
          <!-- Site URL -->
          <div
            style="display: flex; align-items: center; gap: 8px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25); border-radius: 9999px; padding: 6px 16px;"
          >
            <div style="width: 7px; height: 7px; border-radius: 50%; background: #22c55e;" />
            <span style="color: #818cf8; font-size: 14px; font-weight: 700;">nethsara.me</span>
          </div>
          <!-- Tech tags -->
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.22); border-radius: 6px; padding: 4px 12px; color: #818cf8; font-size: 13px; font-weight: 500;">TypeScript</span>
            <span style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.22); border-radius: 6px; padding: 4px 12px; color: #818cf8; font-size: 13px; font-weight: 500;">Java</span>
            <span style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.22); border-radius: 6px; padding: 4px 12px; color: #818cf8; font-size: 13px; font-weight: 500;">Python</span>
          </div>
        </div>
      </div>

      <!-- ── Right: Profile photo ── -->
      <div style="display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 250px; height: 250px; position: relative;">
        <!-- Outer decorative ring -->
        <div
          style="position: absolute; width: 250px; height: 250px; border-radius: 50%; border: 1px solid rgba(99,102,241,0.25);"
        />
        <div
          style="position: absolute; width: 226px; height: 226px; border-radius: 50%; border: 1px solid rgba(139,92,246,0.18);"
        />
        <!-- Gradient ring + photo -->
        <div
          style="width: 204px; height: 204px; border-radius: 50%; padding: 3px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 60%, #6366f1 100%); display: flex; align-items: center; justify-content: center;"
        >
          <div
            style="width: 198px; height: 198px; border-radius: 50%; overflow: hidden; border: 3px solid #050505;"
          >
            <img
              src="/images/profile/nethsara.jpg"
              width="192"
              height="192"
              style="width: 192px; height: 192px; object-fit: cover; border-radius: 50%;"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
