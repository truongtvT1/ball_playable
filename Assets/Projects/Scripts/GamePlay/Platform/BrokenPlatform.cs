using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BrokenPlatform : MonoBehaviour
{
    [SerializeField]
    private float breakDelay;
    [SerializeField]
    private float respawnDelay;



    [SerializeField]
    private ParticleSystem breakEffect;
    [SerializeField]
    private ParticleSystem breakDelayEffect;
    [SerializeField]
    private ParticleSystem respawnEffect;
    private bool shaking = false;

    public AudioClip platformBreakingSound;
    public AudioClip platformExplodeSound;
    public AudioClip platformAppearSound;
    [SerializeField]
    private Transform sprite;
    // Start is called before the first frame update
    void Start()
    {
        var breakDelayEmission = breakDelayEffect.emission;
        breakDelayEmission.rateOverTime = 0;
        var respawnEffectEmission = respawnEffect.emission;
        respawnEffectEmission.rateOverTime = 0;
    }
    
    public void OnCollisionEnter2D(Collision2D coll)
    {
        // if (!shaking)
        // {
        //     shaking = true;
        //     var breakDelayEmission = breakDelayEffect.emission;
        //     breakDelayEmission.rateOverTime = 20;
        //     foreach (Transform spriteChild in sprite)
        //     {
        //         // SoundManager.Instance.PlaySound3D(platformBreakingSound, transform.position, 20);
        //         spriteChild.DOShakeRotation(breakDelay, new Vector3(0, 0, 20), 30, 20, false).OnComplete(() =>
        //         {
        //             // SoundManager.Instance.PlaySound3D(platformExplodeSound, transform.position, 20);
        //             breakDelayEmission.rateOverTime = 0;
        //             breakEffect.Play();
        //             gameObject.SetActive(false);
        //             transform.GetChild(0).eulerAngles = Vector3.zero;
        //             transform.DOScale(1, respawnDelay).OnComplete(() =>
        //             {
        //                 // SoundManager.Instance.PlaySound3D(platformAppearSound, transform.position, 20);
        //                 var respawnEffectEmission = respawnEffect.emission;
        //                 respawnEffectEmission.rateOverTime = 20;
        //                 gameObject.SetActive(true);
        //                 transform.localScale = Vector3.zero;
        //                 transform.DOScale(1, 1f).OnComplete(() => respawnEffectEmission.rateOverTime = 0);
        //                 shaking = false;
        //             });
        //         });
        //     }
        // }
    }
}
