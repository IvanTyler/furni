export const copyReferalCodeMobile = async (code: string) => {
    const shareData = {
        text: code,
    };

    if (navigator.share) {
        try {
            const response = await navigator.share(shareData);
        } catch (err) {
            console.log(err)
        }
    }
}