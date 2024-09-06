<script lang="ts">
export let aboutcontent;
</script>

<div class="flex flex-col items-center p-10 gap-5 rounded bg-primary-foreground">
    <div class="grid grid-cols-3 items-stretch justify-items-start w-full">
        
        <div class="flex flex-col col-span-1">
            <h1 class="text-4xl font-black text-yellow-600">{aboutcontent.title}</h1>
        </div>

        <div class="flex flex-col col-span-1">
            <h1>{@html aboutcontent.content}</h1>
        </div>
        <div class="flex flex-col col-span-1">
            <h1>{@html aboutcontent.content_alt}</h1>
        </div>

    </div>
</div>