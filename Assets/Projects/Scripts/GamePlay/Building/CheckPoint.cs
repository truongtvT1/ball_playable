using Projects.Scripts.UIController;
using Spine.Unity;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Building
{
    public class CheckPoint : MonoBehaviour
    {
        [SerializeField] private GameObject reviveEffect;
        [SerializeField] private SkeletonAnimation animation;
        [SerializeField] private Collider2D collider;
        [SerializeField] private bool playSound = true;

        private void OnTriggerEnter2D(Collider2D other)
        {
            if (!other.CompareTag("Player")) return;
            GamePlayController.Instance.SetCheckPoint(this, playSound);
            collider.enabled = false;
            if (animation != null)
            {
                animation.AnimationState.SetAnimation(0, "checked", false);
            }
        }

        public void ShowEffect()
        {
            reviveEffect?.SetActive(true);
        }
    }
}