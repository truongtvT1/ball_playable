using System.Collections.Generic;
using DG.Tweening;
using Projects.Scripts.GamePlay.Sound;
using Projects.Scripts.UIController;
using Spine.Unity;
using Truongtv.Utilities;
using UnityEngine;
using Ease = DG.Tweening.Ease;

namespace Projects.Scripts.GamePlay.Item
{
    public class Cage : MonoBehaviour
    {
       
        [SerializeField] private SkeletonAnimation ballImprisoned;
        [SerializeField, SpineAnimation] private string startAnimation, rescueAnimation;
        [SerializeField] private string trySkinName;
        [SerializeField] private SkeletonAnimation cageSkeleton;
        [SerializeField, SpineAnimation] private string cageBreakAnim;
        [SerializeField] private Collider2D collider;
        [SerializeField] private LayerMask triggerLayer;
        void Start()
        {
            OnValueChange();
        }
        private void OnValueChange()
        {
            ballImprisoned.initialSkinName = trySkinName;
            ballImprisoned.Initialize(true);
            ballImprisoned.AnimationState.SetAnimation(0,startAnimation,true);
        }
        private List<string> GetAllSkinName()
        {
            var result = new List<string>();
            var totalSkin = ballImprisoned.SkeletonDataAsset.GetSkeletonData(true).Skins.Items;
            foreach (var skin in totalSkin)
            {
                result.Add(skin.Name.Split('_')[0]);
            }
            result.Remove("default");
            return result;
        }

        private void OnTriggerEnter2D(Collider2D collider2D)
        {
            if(!Extended.IsInLayerMask(collider2D.gameObject,triggerLayer)) return;
            collider.enabled = false;
            cageSkeleton.state.SetAnimation(0, cageBreakAnim, false);
            ballImprisoned.state.SetAnimation(0,rescueAnimation,true);
            SoundInGameManager.Instance.PlayRescueSound();
            SoundInGameManager.Instance.PlayCageBreakSound();
            
        }
    }
}